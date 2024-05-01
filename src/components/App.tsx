import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./common/Navbar";
import MainPage from "./pages/MainPage";
import ProfilesPage from "./pages/ProfilesPage";
import ErrorPage from "./pages/ErrorPage";

import {
  MAIN_PAGE,
  PROFILES_PAGE,
  ERROR_PAGE,
  ALL_PATHS,
} from "../constants/app.constants";

import logo from "../assets/cloud.png";

const App: React.FC<AppProps> = ({ applicationName }) => {
  const pages: KeyValuePair<string, string>[] = [MAIN_PAGE, PROFILES_PAGE];

  return (
    <BrowserRouter>
      <Navbar image={logo} applicationName={applicationName} pages={pages} />
      <main className="container">
        <Routes>
          <Route
            path={MAIN_PAGE.value}
            element={
              <MainPage
                applicationName={applicationName}
                pageName={MAIN_PAGE.key}
              />
            }
          />
          <Route
            path={PROFILES_PAGE.value}
            element={<ProfilesPage pageName={PROFILES_PAGE.key} />}
          />
          <Route
            path={ERROR_PAGE.value}
            element={<ErrorPage pageName={ERROR_PAGE.key} />}
          />
          <Route
            path={ALL_PATHS.value}
            element={<Navigate to={ERROR_PAGE.value} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
