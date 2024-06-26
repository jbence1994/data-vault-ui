import React from "react";

import FileInput from "./FileInput";

import { NO_PHOTO } from "../../constants/app.constants.ts";

const Card: React.FC<CardProps> = ({
  title,
  image,
  imageAlt,
  contents,
  onChange,
}) => {
  const photoUploadName: string = "photo-upload";

  return (
    <div
      className="card mt-3"
      style={{
        width: "20rem",
        display: "block",
        margin: "0 auto",
      }}
    >
      <label htmlFor={photoUploadName}>
        <img className="card-img-top" src={image} alt={imageAlt} />
        <FileInput
          name={photoUploadName}
          disabled={!image.includes(NO_PHOTO)}
          onChange={onChange}
        />
      </label>
      <div className="card-body">
        <h5 className="card-title mb-3">{title}</h5>
        {contents.map((content: KeyValuePair<number, string>) => (
          <p className="card-text mb-2" key={content.key}>
            {content.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
