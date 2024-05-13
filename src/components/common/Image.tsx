import React from "react";

const Image: React.FC<ImageProps> = ({ source, imageAlt }) => {
  return (
    <img
      src={source}
      alt={imageAlt}
      style={{ width: "50px", height: "50px" }}
    />
  );
};

export default Image;
