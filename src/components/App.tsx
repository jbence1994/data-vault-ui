import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./common/Navbar";

import logo from "../assets/cloud.png";

const App: React.FC<AppProps> = ({ applicationName }) => {
  return (
    <BrowserRouter>
      <Navbar image={logo} applicationName={applicationName} pages={[]} />
      <main className="container">
        <section className="row">
          <article className="col-sm-12 col-md-12 col-lg-12">
            <div className="text-center">
              <h1>Welcome to {applicationName}!</h1>
            </div>
          </article>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
