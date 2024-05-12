import React from "react";

import hungarianFlag from "../../assets/nationalities/hungary.png";

const NationalitiesIcon: React.FC<NationalitiesIconProps> = ({
  nationality,
}) => {
  if (nationality === "HUN") {
    // TODO: Move to constant value.
    return (
      <img
        src={hungarianFlag}
        alt={nationality}
        style={{ width: "50px", height: "50px" }}
      />
    );
  }
  return <span>{nationality}</span>;
};

export default NationalitiesIcon;
