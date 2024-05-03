import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Card from "../common/Card";

import PROFILE from "../../graphql/queries/profileQuery.ts";

import { NETWORK_ONLY } from "../../constants/app.constants.ts";

import { formatDate } from "../../util/dateFormatter.ts";

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
  } = profile;

  return (
    <Card
      title={`Full name: ${lastName}, ${middleName} ${firstName}`}
      image={noImage}
      imageAlt={id}
      contents={[
        { key: 1, value: `Gender: ${gender ? "Male" : "Female"}` },
        { key: 2, value: `Date of Birth: ${birthDate}` },
        { key: 3, value: `Phone number: ${phone}` },
        { key: 4, value: `E-mail address: ${email}` },
        {
          key: 5,
          value: `Created date time: ${formatDate(profile.createdDateTime)}`,
        },
      ]}
      onChange={handlePhotoUpload}
    />
  );
};

export default ProfilePage;
