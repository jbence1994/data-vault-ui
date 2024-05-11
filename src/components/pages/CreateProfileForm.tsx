import React, { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "@apollo/client";

import TextInput from "../common/TextInput";
import Dropdown from "../common/Dropdown";
import NationalitiesDropdown from "../custom/NationalitiesDropdown";
import Button from "../common/Button";
import ModalWindow from "../common/ModalWindow";

import CREATE_PROFILE from "../../graphql/mutations/createProfileMutation";

import { PROFILES_PAGE } from "../../constants/app.constants";

const CreateProfileForm: React.FC<PageProps> = () => {
  const [createProfile, { loading, error }] = useMutation(CREATE_PROFILE);

  const [profile, setProfile] = useState<ProfileInput>({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: 0,
    nationality: "",
    birthDate: "",
    birthPlace: "",
    phone: "",
    email: "",
  });

  const [createdProfileId, setCreatedProfileId] = useState<string>("");

  const [shouldShowSuccessModalWindow, setShouldShowSuccessModalWindow] =
    useState(false);
  const [shouldShowErrorModalWindow, setShouldErrorShowModalWindow] =
    useState(false);

  const handleSuccessModalClosed = (): void => {
    setShouldShowSuccessModalWindow(false);
    setProfile({
      firstName: "",
      middleName: "",
      lastName: "",
      gender: 0,
      nationality: "",
      birthDate: "",
      birthPlace: "",
      phone: "",
      email: "",
    });
  };

  const handleErrorModalClosed = (): void => {
    setShouldErrorShowModalWindow(false);
  };

  const handleTextChange = ({
    currentTarget: input,
  }: ChangeEvent<HTMLInputElement>): void => {
    const updatedProfile = { ...profile };
    updatedProfile[input.name] = input.value;
    setProfile(updatedProfile);
  };

  const handleDropdownChanged = ({
    currentTarget: input,
  }: ChangeEvent<HTMLSelectElement>): void => {
    const updatedProfile = { ...profile };
    updatedProfile[input.name] = input.value;
    setProfile(updatedProfile);
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      const response = await createProfile({
        variables: {
          firstName: profile.firstName,
          middleName: profile.middleName,
          lastName: profile.lastName,
          gender: profile.gender,
          nationality: profile.nationality,
          birthDate: profile.birthDate,
          birthPlace: profile.birthPlace,
          phone: profile.phone,
          email: profile.email,
        },
      });

      if (!loading && !error) {
        const { data } = response;
        setCreatedProfileId(data.profile.id);
      }

      setShouldShowSuccessModalWindow(true);
    } catch {
      setShouldErrorShowModalWindow(true);
    }
  };

  return (
    <section className="row">
      <article className="col-12">
        <form onSubmit={handleSubmit} noValidate>
          <div className="row mb-3">
            <div className="col-4">
              <TextInput
                type="text"
                name="firstName"
                value={profile.firstName}
                labelText="First name"
                errorMessage=""
                onChange={handleTextChange}
              />
            </div>
            <div className="col-4">
              <TextInput
                type="text"
                name="middleName"
                value={profile.middleName}
                labelText="Middle name"
                errorMessage=""
                onChange={handleTextChange}
              />
            </div>
            <div className="col-4">
              <TextInput
                type="text"
                name="lastName"
                value={profile.lastName}
                labelText="Last name"
                errorMessage=""
                onChange={handleTextChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-4">
              <Dropdown
                name="gender"
                value="gender"
                firstOptionText="Select gender"
                labelText="Gender"
                data={[
                  { key: "0", value: "Female" },
                  { key: "1", value: "Male" },
                ]}
                errorMessage=""
                onChange={handleDropdownChanged}
              />
            </div>
            <div className="col-4">
              <NationalitiesDropdown
                selectedNationality={profile.nationality}
                onChange={handleDropdownChanged}
              />
            </div>
            <div className="col-4"></div>
          </div>

          <div className="row mb-3">
            <div className="col-4">
              <TextInput
                type="text"
                name="birthPlace"
                value={profile.birthPlace}
                labelText="Place of birth"
                errorMessage=""
                onChange={handleTextChange}
              />
            </div>
            <div className="col-4">
              <TextInput
                type="text"
                name="phone"
                value={profile.phone}
                labelText="Phone"
                errorMessage=""
                onChange={handleTextChange}
              />
            </div>
            <div className="col-4">
              <TextInput
                type="email"
                name="email"
                value={profile.email}
                labelText="E-mail"
                errorMessage=""
                onChange={handleTextChange}
              />
            </div>
          </div>
          <Button text="Create profile" />
        </form>
        {shouldShowSuccessModalWindow && (
          <ModalWindow
            title="Profile created successfully"
            content={`Successfully created new profile with identifier: #${createdProfileId}.`}
            buttonText="Continue creating new profiles"
            routingButtonText="Back to profiles"
            redirectUrl={PROFILES_PAGE.value}
            onClick={handleSuccessModalClosed}
          />
        )}
        {shouldShowErrorModalWindow && (
          <ModalWindow
            title="Profile creation failed"
            content={`Creating new profile failed.`}
            buttonText="OK"
            isSuccessModal={false}
            onClick={handleErrorModalClosed}
          />
        )}
      </article>
    </section>
  );
};

export default CreateProfileForm;
