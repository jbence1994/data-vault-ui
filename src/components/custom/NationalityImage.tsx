import React from "react";

import Image from "../common/Image.tsx";

import hungarianFlag from "../../assets/nationalities/hungary.png";
import usaFlag from "../../assets/nationalities/usa.png";

const NationalityImage: React.FC<NationalityImageProps> = ({ alpha3Code }) => {
  const nationalityNamesAndFlags: Map<string, string> = new Map<string, string>(
    [
      ["HUN", hungarianFlag],
      ["USA", usaFlag],
    ],
  );

  return (
    <Image
      source={nationalityNamesAndFlags.get(alpha3Code)}
      imageAlt={alpha3Code}
    />
  );
};

export default NationalityImage;
