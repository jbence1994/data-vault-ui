import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App";

import { APPLICATION_NAME } from "./constants/app.constants";

import "./main.css";

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById("root")!,
);

root.render(
  <React.StrictMode>
    <App applicationName={APPLICATION_NAME} />
  </React.StrictMode>,
);
