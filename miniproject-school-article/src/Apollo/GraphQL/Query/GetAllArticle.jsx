import { gql } from "@apollo/client";

export const GET_ARTICLE = gql`
  query GetArticle($id: Int!) {
    miniProject_artikel(where: { id: { _eq: $id } }) {
      artikel_title
      artikel_content
      author
      created_at
      updated_at
      user_id
      id
    }
  }
`;
