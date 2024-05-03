import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Card from "../common/Card";

import PROFILE from "../../graphql/queries/profileQuery.ts";

import { NETWORK_ONLY } from "../../constants/app.constants.ts";

import noImage from "../../assets/no-image.png";

const ProfilePage: React.FC<PageProps> = () => {
  const { id: routeParamId } = useParams();

  const [profile, setProfile] = useState<Profile>({
    id: `${routeParamId}`,
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

  const handlePhotoUpload = () => {
    console.log("Uploading photo...");
  };

  const {
    id,
    firstName,
    middleName,
    lastName,
    gender,
    birthDate,
    phone,
    email,
    createdDateTime,
  } = profile;

  return (
    <Card
      title={`Név: ${lastName}, ${middleName} ${firstName}`}
      image={noImage}
      imageAlt={id}
      contents={[
        { key: 1, value: `Nem: ${gender ? "Férfi" : "Nő"}` },
        { key: 2, value: `Születési idő: ${birthDate}` },
        { key: 3, value: `Telefonszám: ${phone}` },
        { key: 4, value: `E-mail cím: ${email}` },
        { key: 5, value: `Rögzítés dátuma: ${createdDateTime}` },
      ]}
      onChange={handlePhotoUpload}
    />
  );
};

export default ProfilePage;
