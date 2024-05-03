import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import PROFILE from "../../graphql/queries/profileQuery.ts";

import { NETWORK_ONLY } from "../../constants/app.constants.ts";

const ProfilePage: React.FC<PageProps> = () => {
  const { id: routeParamId } = useParams();

  const [profile, setProfile] = useState<Profile>({
    id: routeParamId,
    firstName: "",
    middleName: "",
    lastName: "",
    gender: 0,
    birthDate: "",
    phone: "",
    email: "",
    photo: "",
    createdDateTime: "",
  });

  const { loading, error, data } = useQuery(PROFILE, {
    fetchPolicy: NETWORK_ONLY,
    variables: { id: routeParamId },
  });

  useEffect(() => {
    if (!loading && !error) {
      setProfile(data.profile);
    }
  }, [loading, error, data]);

  return (
    <section className="row">
      <article className="col-sm-12 col-md-12 col-lg-12">
        <p>{profile.firstName}</p>
        <p>{profile.middleName}</p>
        <p>{profile.lastName}</p>
        <p>{profile.gender}</p>
        <p>{profile.birthDate}</p>
        <p>{profile.phone}</p>
        <p>{profile.email}</p>
        <p>{profile.photo}</p>
        <p>{profile.createdDateTime}</p>
      </article>
    </section>
  );
};

export default ProfilePage;
