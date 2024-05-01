import React from "react";

const MainPage: React.FC<MainPageProps> = ({ applicationName }) => {
  return (
    <section className="row">
      <article className="col-sm-12 col-md-12 col-lg-12">
        <div className="text-center">
          <h1>Welcome to {applicationName}</h1>
          <h2>Enjoy it!</h2>
        </div>
      </article>
    </section>
  );
};

export default MainPage;
