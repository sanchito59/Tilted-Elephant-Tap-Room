import React from "react";

export default function Underage() {
  const underagePage = {
    backgroundColor: "rgb(204,224,224)",
    height: "100vh"
  };

  const pageContent = {
    textAlign: "center",
    padding: "16px",
    backgroundColor: "rgba(51, 68, 85, 0.9)",
    color: "rgb(255, 255, 245)",
    marginLeft: "20px",
    marginRight: "20px",
    borderRadius: "8px"
  };

  return (
    <div style={underagePage}>
      <div style={pageContent}>
        <h1>Sorry, come back when you are of legal drinking age!</h1>
      </div>
    </div>
  );
}
