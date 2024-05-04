import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import ProfilesTable from "../custom/ProfilesTable";

import PROFILES from "../../graphql/queries/profilesQuery";

import { NETWORK_ONLY } from "../../constants/app.constants";

const ProfilesPage: React.FC<PageProps> = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const { loading, error, data } = useQuery(PROFILES, {
    fetchPolicy: NETWORK_ONLY,
  });

  useEffect((): void => {
    if (!loading && !error) {
      setProfiles(data.profiles);
    }
  }, [loading, error, data]);

  return (
    <section className="row">
      <article className="col-sm-12 col-md-12 col-lg-12">
        <ProfilesTable profiles={profiles} />
      </article>
    </section>
  );
};

export default ProfilesPage;
