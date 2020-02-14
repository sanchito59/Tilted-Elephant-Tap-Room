import React from "react";

import NavLinks from "./NavLinks";

import elephantIcon from "./../images/elephant.png";
import kegIcon from "./../images/keg.png";

export default function Header() {
  const navLinks = {
    textAlign: "center",
    paddingTop: "3%",
    backgroundColor: "rgba(170,204,204, 0.6)"
  };

  const brandIcons = {};

  const kegIconStyle = {
    marginBottom: "15px"
  };

  return (
    <div style={navLinks}>
      <div style={brandIcons}>
        <img style={kegIconStyle} src={kegIcon} alt="elephant icon" />
        <img src={elephantIcon} alt="elephant icon" />
      </div>
      <NavLinks />
    </div>
  );
}
