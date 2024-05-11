import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import Dropdown from "../common/Dropdown";

import NATIONALITIES from "../../graphql/queries/nationalitiesQuery";

import { NETWORK_ONLY } from "../../constants/app.constants";

const NationalitiesDropdown: React.FC<NationalitiesDropdownProps> = ({
  selectedNationality,
  onChange,
}) => {
  const [nationalities, setNationalities] = useState<Nationality[]>([]);

  const { loading, error, data } = useQuery(NATIONALITIES, {
    fetchPolicy: NETWORK_ONLY,
  });

  useEffect((): void => {
    if (!loading && !error) {
      setNationalities(data.nationalities);
    }
  }, [loading, error, data]);

  const mapToKeyValuePair = (nationalities: Nationality[]) => {
    return nationalities.map(
      (nationality: Nationality): KeyValuePair<string, string> => ({
        key: nationality.alpha3Code,
        value: nationality.countryName,
      }),
    );
  };

  return (
    <Dropdown
      name="nationality"
      value={selectedNationality}
      labelText="Nationality"
      data={mapToKeyValuePair(nationalities)}
      errorMessage=""
      onChange={onChange}
    />
  );
};

export default NationalitiesDropdown;
