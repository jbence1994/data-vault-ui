// Image types

declare module "*.png";

// Common FC Props types

interface NavbarProps {
  image: string;
  applicationName: string;
  pages: KeyValuePair<string, string>[];
}

// Custom FC and Page FC Props types

interface AppProps {
  applicationName: string;
}

interface PageProps {
  pageName: string;
}

interface MainPageProps extends PageProps {
  applicationName: string;
}

interface ProfileTableProps {
  columns: KeyValuePair<string, string>[];
  profiles: Profile[];
}

// Custom data model types

interface Profile {
  [key: string]: number | string | undefined;
  id: string | undefined;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: number;
  birthDate: string;
  phone: string;
  email: string;
  photo: string;
  createdDateTime: string;
}

// Other custom types

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
