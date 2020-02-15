import React from "react";

// Components
import NavLinks from "./NavLinks";
import CompanyTitle from "./CompanyTitle";

// Assets
import elephantIcon from "./../images/elephant.png";
import kegIcon from "./../images/keg.png";

export default function Header() {
  const navLinks = {
    textAlign: "center",
    paddingTop: "3%",
    backgroundColor: "rgb(204,224,224)"
  };

  const elephantTilt = {
    webkitTransform: "rotate(15deg)",
    mozTransform: "rotate(15deg)",
    msTransform: "rotate(15deg)",
    oTransform: "rotate(15deg)",
    transform: "rotate(15deg)"
  };

  return (
    <div style={navLinks}>
      <div>
        <img src={kegIcon} alt="elephant icon" />
        <img style={elephantTilt} src={elephantIcon} alt="elephant icon" />
      </div>
      <CompanyTitle />
      <NavLinks />
    </div>
  );
}
