import { gql } from "@apollo/client";

export const GET_SUBSCRIPTION_ARTICLE_LIMIT = gql`
  subscription getSubscriptionArticle {
    miniProject_artikel(limit: 3) {
      id
      author
      artikel_title
      artikel_content
      updated_at
      user_id
    }
  }
`;
