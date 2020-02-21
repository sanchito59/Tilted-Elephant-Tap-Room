import React from "react";
import PropTypes from "prop-types";

// Assets
import kegIconSvg from "./../images/kegIcon.svg";

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

  const statusBarStyle = {
    color: "white"
  };

  const innerStatusBarStyle = {
    backgroundColor: "white",
    width: "150px",
    borderRadius: "8px",
    height: "248px",
    transform: "rotate(180deg)"
  };

  const pintsLeftInKegStyle = {
    backgroundColor: "green",
    width: "150px",
    borderRadius: "8px",
    height: `${props.pintsLeftInKeg * 2}` + "px",
    transform: "rotate(180deg)"
  };

  const pintsLeftText = {
    color: "black"
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
    classes +=
      props.pintsLeftInKeg > 65
        ? "primary"
        : props.pintsLeftInKeg > 20
        ? "warning"
        : "danger";
    return classes;
  };

  return (
    <div style={keg}>
      <h2>{props.name}</h2>
      <h4>
        Made By <span style={brand}>{props.brand}</span>
      </h4>
      <div style={statusBarStyle}>
        <div style={innerStatusBarStyle}>
          <div style={pintsLeftInKegStyle} id="kegFillStatusBar">
            <p style={pintsLeftText}>Pints Left</p>
          </div>
        </div>
      </div>
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
