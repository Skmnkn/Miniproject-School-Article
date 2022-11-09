import { gql } from "@apollo/client";

export const EDIT_ARTICLE = gql`
  mutation EditArticle(
    $id: Int
    $artikel_content: String
    $artikel_title: String
    $author: String
  ) {
    update_miniProject_artikel(
      where: { id: { _eq: $id } }
      _set: {
        author: $author
        artikel_title: $artikel_title
        artikel_content: $artikel_content
      }
    ) {
      returning {
        id
        author
        artikel_title
        artikel_content
      }
    }
  }
`;
