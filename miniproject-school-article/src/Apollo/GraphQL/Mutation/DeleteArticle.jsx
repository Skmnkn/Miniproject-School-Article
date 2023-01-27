import { gql } from "@apollo/client";

export const DELETE_ARTICLE = gql`
  mutation DeleteArticle($id: uuid!) {
    delete_miniProject_artikel(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
