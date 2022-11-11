import { gql } from "@apollo/client";

export const GET_LOGIN = gql`
  query GetLogin($email: String, $password: String) {
    miniProject_user(
      limit: 1
      where: { email: { _eq: $email }, password: { _eq: $password } }
    ) {
      id
      username
      email
      password
    }
  }
`;
