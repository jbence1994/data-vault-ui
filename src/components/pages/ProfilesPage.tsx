import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import ProfilesTable from "../custom/ProfileTable";

import PROFILES from "../../graphql/queries/profilesQuery.ts";

import { NETWORK_ONLY } from "../../constants/app.constants.ts";

const ProfilesPage: React.FC<PageProps> = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const { loading, error, data } = useQuery(PROFILES, {
    fetchPolicy: NETWORK_ONLY,
  });

  useEffect(() => {
    if (!loading && !error) {
      setProfiles(data.profiles);
    }
  }, [loading, error, data]);

  const profilesTableColumns = [
    { key: "firstName", value: "First name" },
    { key: "middleName", value: "Middle name" },
    { key: "lastName", value: "Last name" },
  ];

  return (
    <section className="row">
      {profiles.map((profile: Profile) => (
        <article key={profile.id} className="col-sm-12 col-md-12 col-lg-12">
          <ProfilesTable columns={profilesTableColumns} profiles={profiles} />
        </article>
      ))}
    </section>
  );
};

export default ProfilesPage;
