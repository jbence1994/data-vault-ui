import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import Dropdown from "../common/Dropdown.tsx";

import NATIONALITIES from "../../graphql/queries/nationalitiesQuery.ts";

import { NETWORK_ONLY } from "../../constants/app.constants.ts";

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

  return (
    <Dropdown
      name="nationality"
      value={selectedNationality}
      firstOptionText={"Select nationality..."}
      labelText="Nationality"
      data={nationalities}
      errorMessage=""
      onChange={onChange}
    />
  );
};

export default NationalitiesDropdown;
