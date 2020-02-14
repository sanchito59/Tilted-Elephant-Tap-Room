import React from "react";
import PropTypes from "prop-types";

import Counters from "./Counters";

export default function Keg(props) {
  const keg = {
    padding: "16px",
    backgroundColor: "rgba(51, 68, 85, 0.9)",
    color: "rgb(255, 255, 245)",
    margin: "20px",
    borderRadius: "8px"
  };

  const brand = {
    fontStyle: "italic"
  };

  const bold = {
    fontWeight: "bold"
  };

  const description = {
    width: "60%"
  };

  const hr = {
    marginTop: "12px",
    width: "75%",
    borderColor: "rgb(255, 255, 255)"
  };

  return (
    <div style={keg}>
      <h2>{props.name}</h2>
      <h4>
        Made By <span style={brand}>{props.brand}</span>
      </h4>
      <h4>${props.price} per pint</h4>
      <p>
        <span style={bold}>ABV: </span>
        {props.alcoholContent}%
      </p>
      <p>
        <span style={bold}>IBU: </span> {props.IBU}
      </p>
      <p style={description}>{props.description}</p>
      <Counters />
      <hr style={hr}></hr>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  IBU: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
