import React from "react";
import PropTypes from "prop-types";

export default function Keg(props) {
  // Styles
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

  // Functionality
  const pintSale = () => {
    // For purposes of pre-existing kegs, so the site isn't empty, two functions are used
    if (typeof props.id != "string") {
      props.sellingOfHousePint(props.id);
    } else {
      props.sellingOfPint(props.id);
    }
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.pintsLeftInKeg === 0 ? "warning" : "primary";
    return classes;
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
      <p className={getBadgeClasses()}>{props.pintsLeftInKeg}</p>
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
