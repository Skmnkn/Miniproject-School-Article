import { gql } from "@apollo/client";

export const GET_ARTICLE = gql`
  query GetArticle {
    miniProject_artikel(where: { user_id: { _eq: 1 } }) {
      artikel_title
      artikel_content
      author
      user_id
      id
    }
  }
`;
