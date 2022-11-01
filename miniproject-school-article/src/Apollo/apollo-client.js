import { ApolloClient, InMemoryCache } from "@apollo/client";
import CONST from "../Utils/constants";

export const client = new ApolloClient({
  uri: CONST.BASE_URL_API,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": CONST.REACT_APP_KEY_ID,
  },
});
