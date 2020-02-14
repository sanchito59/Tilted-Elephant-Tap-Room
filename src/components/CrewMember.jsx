import React from "react";
import PropTypes from "prop-types";

export default function CrewMember(props) {
  const crewMemberDiv = {
    backgroundColor: "rgba(51, 68, 85, 0.97)",
    width: "65%",
    padding: "16px",
    color: "rgb(255, 255, 245)",
    margin: "20px",
    borderRadius: "8px"
  };

  const jobTitle = {
    color: "black"
  };
  return (
    <div style={crewMemberDiv}>
      <h4 style={jobTitle}>{props.title}</h4>
      <p>{props.fullName}</p>
      <p>{props.bio}</p>
    </div>
  );
}

CrewMember.propTypes = {
  title: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};
