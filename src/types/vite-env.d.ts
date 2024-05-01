// Image types

declare module "*.png";

// Common FC Props types

interface NavbarProps {
  image: string;
  applicationName: string;
  pages: KeyValuePair<string, string>[];
}

// Custom FC types

interface AppProps {
  applicationName: string;
}

// Other custom types

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
