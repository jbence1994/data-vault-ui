import React from "react";

import logo from "../assets/cloud.png";

const App: React.FC<AppProps> = () => {
  return (
    <main className="container">
      <section className="row">
        <article className="col-sm-12"></article>
        <article className="col-sm-12">
          <div className="text-center">
            <img src={logo} className="" alt="DataVault logo" />
          </div>
          <h1 className="text-center">DataVault</h1>
        </article>
        <article className="col-sm-12"></article>
      </section>
    </main>
  );
};

export default App;
