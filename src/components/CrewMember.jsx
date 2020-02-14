import React from "react";
import PropTypes from "prop-types";

export default function CrewMember(props) {
  return (
    <div>
      <h4>{props.title}</h4>
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
