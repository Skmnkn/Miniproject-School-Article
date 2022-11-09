import { gql } from "@apollo/client";

export const INSERT_ARTICLE = gql`
  mutation InsertArticle($objects: [miniProject_artikel_insert_input!] = {}) {
    insert_miniProject_artikel(objects: $objects) {
      returning {
        id
      }
    }
  }
`;
