import { gql } from "@apollo/client";

export const GET_ARTICLE = gql`
  query GetArticle($id: uuid) {
    miniProject_artikel(where: { id: { _eq: $id } }) {
      artikel_title
      artikel_content
      author
      updated_at
      user_id
      id
    }
  }
`;
