import { WatchQueryFetchPolicy } from "@apollo/client";

// Application properties constants

const APPLICATION_NAME: string = "DataVault";

// Page name constants

const MAIN_PAGE: KeyValuePair<string, string> = {
  key: "Main page",
  value: "/",
};

const PROFILES_PAGE: KeyValuePair<string, string> = {
  key: "Profiles",
  value: "/profiles",
};

const PROFILE_PAGE: KeyValuePair<string, string> = {
  key: "Profile",
  value: "/profile/:id",
};

const ERROR_PAGE: KeyValuePair<string, string> = {
  key: "Error",
  value: "/error",
};

const ALL_PATHS: KeyValuePair<string, string> = {
  key: "All paths",
  value: "*",
};

// Miscellaneous constants

const NETWORK_ONLY: WatchQueryFetchPolicy = "network-only";
const PROFILE_PATH: string = "/profile";
const NOT_AVAILABLE: string = "N/A";
const MALE: string = "Male";
const FEMALE: string = "Female";

export {
  APPLICATION_NAME,
  MAIN_PAGE,
  PROFILES_PAGE,
  PROFILE_PAGE,
  ERROR_PAGE,
  ALL_PATHS,
  NETWORK_ONLY,
  PROFILE_PATH,
  NOT_AVAILABLE,
  MALE,
  FEMALE,
};
