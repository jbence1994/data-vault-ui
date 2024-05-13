import { NOT_AVAILABLE, FEMALE, MALE } from "../constants/app.constants.ts";

import hungarianFlag from "../assets/nationalities/hungary.png";
import usaFlag from "../assets/nationalities/usa.png";

const buildFullName = (
  firstName: string,
  middleName: string,
  lastName: string,
): string => {
  if (middleName === NOT_AVAILABLE) {
    return `${lastName}, ${firstName}`;
  }

  return `${lastName}, ${middleName} ${firstName}`;
};

const formatDate = (date: string): string => {
  return date.split(".")[0].replace("T", " ");
};

const formatGender = (gender: number): string => {
  return gender ? MALE : FEMALE;
};

const mapNationalityToFlag = (alpha3Code: string): string | undefined => {
  const nationalityNamesAndFlags: Map<string, string> = new Map<string, string>(
    [
      ["HUN", hungarianFlag],
      ["USA", usaFlag],
    ],
  );

  return nationalityNamesAndFlags.get(alpha3Code);
};

export { buildFullName, formatDate, formatGender, mapNationalityToFlag };
