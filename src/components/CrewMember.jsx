import React from "react";
import PropTypes from "prop-types";

export default function CrewMember(props) {
  const crewMemberDiv = {
    backgroundColor: "black",
    width: "60vw",
    margin: "0 auto",
    marginBottom: "16px",
    padding: "24px",
    borderRadius: "4px",
    color: "rgb(255, 255, 245)"
  };

  var imageStyles = {
    height: "35vh",
    paddingRight: "5%",
    marginRight: "32px"
  };

  const jobTitle = {
    color: "white",
    textDecoration: "underline",
    textTransform: "uppercase"
  };

  const crewBio = {
    backgroundColor: "rgb(20, 0, 0)",
    padding: "12px",
    width: "60%",
    border: "1.5px solid grey",
    borderRadius: "4px"
  };

  return (
    <div style={crewMemberDiv}>
      <img style={imageStyles} src={props.image} alt="employee bio image"></img>
      <h4 style={jobTitle}>{props.title}</h4>
      <p>{props.fullName}</p>
      <p style={crewBio}>{props.bio}</p>
    </div>
  );
}

CrewMember.propTypes = {
  title: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
