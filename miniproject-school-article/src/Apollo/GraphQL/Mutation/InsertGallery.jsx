import { gql } from "@apollo/client";

export const INSERT_GALLERY = gql`
  mutation InsertGallery($objects: [miniProject_galeri_insert_input!] = {}) {
    insert_miniProject_galeri(objects: $objects) {
      returning {
        id
      }
    }
  }
`;
