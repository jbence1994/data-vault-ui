import { DocumentNode } from "graphql/language";
import { gql } from "@apollo/client";

const NATIONALITIES: DocumentNode = gql`
  query {
    nationalities {
      countryName
      alpha3Code
    }
  }
`;

export default NATIONALITIES;
