import { DocumentNode } from "graphql/language";
import { gql } from "@apollo/client";

const CREATE_PROFILE: DocumentNode = gql`
  mutation createProfile(
    $firstName: String!
    $middleName: String
    $lastName: String!
    $gender: Int!
    $nationality: String
    $birthDate: String
    $birthPlace: String
    $phone: String
    $email: String
  ) {
    createProfile(
      input: {
        firstName: $firstName
        middleName: $middleName
        lastName: $lastName
        gender: $gender
        nationality: $nationality
        birthDate: $birthDate
        birthPlace: $birthPlace
        phone: $phone
        email: $email
      }
    ) {
      id
    }
  }
`;

export default CREATE_PROFILE;
