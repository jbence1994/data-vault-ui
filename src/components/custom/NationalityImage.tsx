import React from "react";

import Image from "../common/Image.tsx";

import { mapNationalityToFlag } from "../../utils/appUtils";

const NationalityImage: React.FC<NationalityImageProps> = ({ alpha3Code }) => {
  return (
    <Image source={mapNationalityToFlag(alpha3Code)} imageAlt={alpha3Code} />
  );
};

export default NationalityImage;
