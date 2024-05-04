import { DocumentNode } from "graphql/language";
import { gql } from "@apollo/client";

const PROFILE: DocumentNode = gql`
  query profile($id: String!) {
    profile(id: $id) {
      id
      firstName
      middleName
      lastName
      gender
      nationality
      birthDate
      birthPlace
      phone
      email
      photo
      createdDateTime
    }
  }
`;

export default PROFILE;
