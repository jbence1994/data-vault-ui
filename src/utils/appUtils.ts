import { NOT_AVAILABLE, FEMALE, MALE } from "../constants/app.constants.ts";

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

export { buildFullName, formatDate, formatGender };
