import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const navLinks = {
    textAlign: "center",
    paddingTop: "3%"
  };

  const hrStyle = {
    marginTop: "5%"
  };

  return (
    <div style={navLinks}>
      <p>
        {" "}
        <Link to="/">Home</Link> |{" "}
        <Link to="/aboutus">
          {" "}
          About Us | <Link to="/careers">Careers</Link> |{" "}
        </Link>{" "}
        <Link to="/beer">On Tap</Link> <hr style={hrStyle} />
      </p>
    </div>
  );
}
