import React from "react";
import PropTypes from "prop-types";

export default function Keg(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.brand}</h3>
      <h3>{props.price}</h3>
      <p>{props.alcoholContent}</p>
      <p>{props.description}</p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
