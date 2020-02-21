import React from "react";
import PropTypes from "prop-types";

export default function Keg(props) {
  const pintSale = () => {
    // For purposes of pre-existing kegs, so the site isn't empty, two functions are used
    if (props.id === 1 || 2 || 3 || 4 || 5) {
      props.sellingOfHousePint(props.id);
    } else {
      props.sellingOfPint(props.id);
    }
  };

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
      <p style={hr}>{props.pintsLeftInKeg}</p>
      <button onClick={pintSale} className="btn btn-secondary btn-sm">
        Sell Pint!
      </button>
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
