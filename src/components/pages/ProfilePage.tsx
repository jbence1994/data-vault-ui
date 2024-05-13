import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Card from "../common/Card";

import PROFILE from "../../graphql/queries/profileQuery";

import { buildFullName, formatGender } from "../../utils/appUtils";

import { NETWORK_ONLY } from "../../constants/app.constants";

import noPhoto from "../../assets/no-photo.png";

const ProfilePage: React.FC<PageProps> = () => {
  const { id: routeParamId } = useParams();

  const [profile, setProfile] = useState<Profile>({
    id: `${routeParamId}`,
    firstName: "",
    middleName: "",
    lastName: "",
    gender: 0,
    nationality: "",
    birthDate: "",
    birthPlace: "",
    phone: "",
    email: "",
    photo: "",
    createdDateTime: "",
  });

  const { loading, error, data } = useQuery(PROFILE, {
    fetchPolicy: NETWORK_ONLY,
    variables: { id: routeParamId },
  });

  useEffect((): void => {
    if (!loading && !error) {
      setProfile(data.profile);
    }
  }, [loading, error, data]);

  const handlePhotoUpload = (): void => {
    console.log("Uploading photo...");
  };

  const {
    id,
    firstName,
    middleName,
    lastName,
    gender,
    nationality,
    birthDate,
    birthPlace,
    phone,
    email,
    photo,
  } = profile;

  let image;

  if (photo) {
    image = `${process.env.VITE_PHOTO_RETRIEVE_ENDPOINT}/${photo}`;
  } else {
    image = noPhoto;
  }

  return (
    <Card
      title={buildFullName(firstName, middleName, lastName)}
      image={image}
      imageAlt={id}
      contents={[
        { key: 1, value: `Gender: ${formatGender(gender)}` },
        { key: 2, value: `Nationality: ${nationality}` },
        { key: 3, value: `Date of birth: ${birthDate}` },
        { key: 4, value: `Place of birth: ${birthPlace}` },
        { key: 5, value: `Phone: ${phone}` },
        { key: 6, value: `E-mail: ${email}` },
      ]}
      onChange={handlePhotoUpload}
    />
  );
};

export default ProfilePage;
