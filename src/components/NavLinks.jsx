import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks() {
  const hrStyle = {
    marginTop: "5%",
    marginBottom: "0"
  };

  const zeroMargin = {
    margin: "0"
  };
  return (
    <p style={zeroMargin}>
      <Link to="/">Home</Link> |<Link to="/kegs">On Tap</Link> |
      <Link to="/newkeg">New Keg </Link>|<Link to="/aboutus">About Us</Link> |
      <Link to="/careers">Careers</Link>
      <hr style={hrStyle} />
    </p>
  );
}
