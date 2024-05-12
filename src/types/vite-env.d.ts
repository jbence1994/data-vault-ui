// Image types

declare module "*.png";

// Common FC Props types

interface ButtonProps {
  text: string;
  url?: string;
  width?: string;
  disabled?: boolean;
}

interface CardProps {
  title: string;
  image: string;
  imageAlt: string;
  contents: KeyValuePair<number, string>[];
  onChange: ChangeEventHandler<HTMLInputElement>;
}

interface DateInputProps {
  name: string;
  value: string;
  labelText: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

interface DropdownProps {
  name: string;
  value: string;
  labelText: string;
  data: KeyValuePair<string, string>[];
  errorMessage: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

interface ErrorMessageProps {
  message: string;
}

interface FileInputProps {
  name: string;
  disabled: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

interface ModalWindowProps {
  title: string;
  content: string;
  buttonText: string;
  routingButtonText?: string;
  redirectUrl?: string;
  isSuccessModal?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface NavbarProps {
  image: string;
  applicationName: string;
  pages: KeyValuePair<string, string>[];
}

interface TextInputProps {
  type: string;
  name: string;
  value: string;
  labelText: string;
  maxLength?: number;
  errorMessage: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
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

interface NationalitiesDropdownProps {
  selectedNationality: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

interface ProfileTableProps {
  profiles: Profile[];
}

// Custom data model types

interface Profile {
  [key: string]: number | string | undefined;
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: number;
  nationality: string;
  birthDate: string;
  birthPlace: string;
  phone: string;
  email: string;
  photo: string;
  createdDateTime: string;
}

interface Nationality {
  countryName: string;
  alpha3Code: string;
}

interface ProfileInput {
  [key: string]: number | string | undefined;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: number;
  nationality: string;
  birthDate: string;
  birthPlace: string;
  phone: string;
  email: string;
}

// Other custom types

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
