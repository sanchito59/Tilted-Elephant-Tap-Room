import React from "react";
import { Link } from "react-router-dom";

// Assets
import elephantIcon from "./../images/elephant.png";
import kegIcon from "./../images/keg.png";

export default function AgeRestriction() {
  const ageRestrictionPage = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1482412344192-78b24602ae92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80)",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundAttachment: "fixed",
    paddingLeft: "40%",
    paddingRight: "40%",
    paddingTop: "10%",
    paddingBottom: "20%"
  };

  const ageVerificationDiv = {
    textAlign: "center",
    padding: "10%",
    backgroundColor: "rgb(204,224,224)"
  };

  const elephantTilt = {
    webkitTransform: "rotate(15deg)",
    mozTransform: "rotate(15deg)",
    msTransform: "rotate(15deg)",
    oTransform: "rotate(15deg)",
    transform: "rotate(15deg)"
  };

  const tapRoomNameHeader = {
    fontFamily: "Montserrat Subrayada"
  };

  return (
    <div style={ageRestrictionPage}>
      <div style={ageVerificationDiv}>
        <img src={kegIcon} alt="elephant icon" />
        <img style={elephantTilt} src={elephantIcon} alt="elephant icon" />
        <h1 style={tapRoomNameHeader}>Tilted Elephant Tap Room</h1>
        <h1>Are you older than 21 years of age?</h1>
        <Link to="/home">Yes, I am older than 21.</Link> |{" "}
        <Link to="/underage">No, I am not older than 21. </Link>
      </div>
    </div>
  );
}

// const navLinks = {
//     textAlign: "center",
//     paddingTop: "3%",
//     backgroundColor: "rgb(204,224,224)"
//   };

//   const tapRoomNameHeader = {
//     fontFamily: "Montserrat Subrayada"
//   };

//   return (
//     <div style={navLinks}>
//       <div>
//         <img src={kegIcon} alt="elephant icon" />
//         <img src={elephantIcon} alt="elephant icon" />
//       </div>
//       <NavLinks />
//     </div>
