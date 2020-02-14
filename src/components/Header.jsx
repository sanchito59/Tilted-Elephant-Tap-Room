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
        <Link to="/">Home</Link> |<Link to="/kegs">On Tap</Link> |
        <Link to="/aboutus">About Us</Link> |<Link to="/careers">Careers</Link>
        <hr style={hrStyle} />
      </p>
    </div>
  );
}
