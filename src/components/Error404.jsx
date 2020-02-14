import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Error404(props) {
  const errorPage = {
    backgroundColor: "rgb(204,224,224)",
    height: "100vh"
  };

  const pageContent = {
    padding: "16px",
    backgroundColor: "rgba(51, 68, 85, 0.5)"
  };

  const pageError = {
    color: "rgb(230, 46, 0)"
  };
  return (
    <div style={errorPage}>
      <div style={pageContent}>
        <h2>
          The page <span style={pageError}>{props.location.pathname}</span> does
          not exist!
        </h2>
        <h3>
          Would you like to return{" "}
          <Link to="/">
            <span>home</span>
          </Link>{" "}
          instead?
        </h3>
      </div>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
