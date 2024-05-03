import React from "react";

import FileInput from "./FileInput";

const Card: React.FC<CardProps> = ({
  title,
  image,
  imageAlt,
  contents,
  onChange,
}) => {
  const photoUploadName: string = "photo-upload";

  return (
    <div className="card mt-3 mb-3">
      <label htmlFor={photoUploadName}>
        <img
          src={image}
          alt={imageAlt}
          className="card-img-top"
          style={{
            width: "200px",
            height: "200px",
            display: "block",
            margin: "0 auto",
            objectFit: "contain",
          }}
        />
        <FileInput
          name={photoUploadName}
          disabled={!image.includes("no-image")}
          onChange={onChange}
        />
      </label>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {contents.map((content: KeyValuePair<number, string>) => (
          <p className="card-text" key={content.key}>
            {content.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
