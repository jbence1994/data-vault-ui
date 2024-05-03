import { DocumentNode } from "graphql/language";
import { gql } from "@apollo/client";

const PROFILES: DocumentNode = gql`
  query {
    profiles {
      id
      firstName
      middleName
      lastName
      gender
      birthDate
      phone
      email
      photo
      createdDateTime
    }
  }
`;

export default PROFILES;
