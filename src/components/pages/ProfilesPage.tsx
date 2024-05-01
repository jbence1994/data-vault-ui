import React from "react";

const ProfilesPage: React.FC<PageProps> = ({ pageName }) => {
  return (
    <section className="row">
      <article className="col-12">
        <div className="text-center">
          <h1>{pageName}</h1>
        </div>
      </article>
    </section>
  );
};

export default ProfilesPage;
