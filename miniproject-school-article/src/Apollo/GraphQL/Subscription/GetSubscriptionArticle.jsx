import { gql } from "@apollo/client";

export const GET_SUBSCRIPTION_ARTICLE = gql`
  subscription getSubscriptionArticle {
    miniProject_artikel {
      id
      author
      artikel_title
      artikel_content
      updated_at
      user_id
    }
  }
`;
