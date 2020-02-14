import React, { Component } from "react";
import PropTypes from "prop-types";

import Counters from "./Counters";

class Keg extends Component {
  render(props) {
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
        <h2>{this.props.name}</h2>
        <h4>
          Made By <span style={brand}>{this.props.brand}</span>
        </h4>
        <h4 className={this.getBadgeClasses()}>${this.props.price} per pint</h4>
        <p>
          <span style={bold}>ABV: </span>
          {this.props.alcoholContent}%
        </p>
        <p>
          <span style={bold}>IBU: </span> {this.props.IBU}
        </p>
        <p style={description}>{this.props.description}</p>
        <Counters />
        <hr style={hr}></hr>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes +=
      this.props.price > 5.0
        ? "warning"
        : this.props.price > 4.49
        ? "primary"
        : "success";
    return classes;
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  IBU: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Keg;
