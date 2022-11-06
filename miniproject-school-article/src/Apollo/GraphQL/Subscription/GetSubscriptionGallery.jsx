import { gql } from "@apollo/client";

export const GET_SUBSCRIPTION_GALLERY = gql`
  subscription getSubscriptionGallery {
    miniProject_galeri {
      id
      image
    }
  }
`;
