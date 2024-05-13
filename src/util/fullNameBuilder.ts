import { NOT_AVAILABLE } from "../constants/app.constants.ts";

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

export { buildFullName };
