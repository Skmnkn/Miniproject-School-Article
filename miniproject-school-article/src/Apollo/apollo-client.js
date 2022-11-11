import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import CONST from "../Utils/constants";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: CONST.BASE_URL_API,
  headers: {
    "x-hasura-admin-secret": CONST.REACT_APP_KEY_ID,
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://dear-warthog-23.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": CONST.REACT_APP_KEY_ID,
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
