import React from "react";

const ErrorPage: React.FC<PageProps> = () => {
  return (
    <section className="row">
      <article className="col-12">
        <div className="text-center">
          <h1>404</h1>
          <h2>Page not found.</h2>
        </div>
      </article>
    </section>
  );
};

export default ErrorPage;
