import React from "react";

import NavLinks from "./NavLinks";

import elephantIcon from "./../images/elephant.png";
import kegIcon from "./../images/keg.png";

export default function Header() {
  const navLinks = {
    textAlign: "center",
    paddingTop: "3%",
    backgroundColor: "rgb(204,224,224)"
  };

  const tapRoomNameHeader = {
    fontFamily: "Montserrat Subrayada"
  };

  return (
    <div style={navLinks}>
      <div>
        <img src={kegIcon} alt="elephant icon" />
        <img src={elephantIcon} alt="elephant icon" />
      </div>
      <h1 style={tapRoomNameHeader}>Tilted Elephant Tap Room</h1>
      <NavLinks />
    </div>
  );
}
