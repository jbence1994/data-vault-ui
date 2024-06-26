import { DocumentNode } from "graphql/language";
import { gql } from "@apollo/client";

const PROFILES: DocumentNode = gql`
  query {
    profiles {
      id
      firstName
      middleName
      lastName
      nationality
      createdDateTime
    }
  }
`;

export default PROFILES;
