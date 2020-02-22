import React from "react";
import PropTypes from "prop-types";

export default function Keg(props) {
  // Styles
  const kegDiv = {
    padding: "16px",
    width: "70%",
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

  const beerDescriptionDiv = {
    marginTop: "10%"
  };

  const beerDescriptionText = {
    // width: "60%"
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
    width: "150.5px",
    borderRadius: "8px",
    height: `${props.pintsLeftInKeg * 2}` + "px",
    transform: "rotate(180deg)"
  };

  // Functionality
  const pintSale = () => {
    props.sellingOfHousePint(props.id);
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

  const kegStatusBackgroundColor = () => {
    let classes = "bg-";
    classes +=
      props.pintsLeftInKeg > 65
        ? "success"
        : props.pintsLeftInKeg > 40
        ? "warning"
        : "danger";
    return classes;
  };

  const kegInformation = (
    <div style={kegDiv}>
      <div className="row">
        <div className="col col-lg-2">
          <div style={statusBarStyle}>
            <div style={innerStatusBarStyle}>
              <div
                className={kegStatusBackgroundColor()}
                style={pintsLeftInKegStyle}
                id="kegFillStatusBar"
              ></div>
            </div>
          </div>
        </div>
        <div className="col col-lg-4">
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
          <p className={getBadgeClasses()}>{props.pintsLeftInKeg}</p>
          <button onClick={pintSale} className="btn btn-secondary btn-sm">
            Sell Pint!
          </button>
        </div>
        <div className="col col-lg-4" style={beerDescriptionDiv}>
          <p style={beerDescriptionText}>{props.description}</p>
        </div>
      </div>
      <hr style={hr}></hr>
    </div>
  );
  if (props.currentRouterPath === "/admin") {
    return (
      <div
        onClick={() => {
          alert("hey, you just clicked the " + props.name + " keg");
        }}
      >
        {kegInformation}
      </div>
    );
  } else {
    return <div>{kegInformation}</div>;
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  IBU: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};
