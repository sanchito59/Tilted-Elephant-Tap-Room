import React from "react";
import Header from "./Header";

export default function NewKegForm() {
  const newKegFormPage = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1559526642-c3f001ea68ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80)",
    backgroundRepeat: "no-repeat",
    height: "105vh",
    backgroundAttachment: "fixed",
    paddingBottom: "100px"
  };

  const formStyle = {
    width: "50%",
    backgroundColor: "rgb(204,224,224)",
    borderRadius: "4px",
    padding: "32px",
    paddingLeft: "44px",
    marginLeft: "5%",
    marginTop: "3%"
  };
  return (
    <div style={newKegFormPage}>
      <Header />
      <div style={formStyle}>
        <form>
          <div className="form-group">
            <input type="text" id="name" placeholder="Beer" />
          </div>
          <div className="form-group">
            <input type="text" id="brand" placeholder="Brand" />
          </div>
          <div className="form-group">
            <input type="text" id="price" placeholder="Price per pint" />
          </div>
          <div className="form-group">
            <input type="text" id="alcoholContent" placeholder="ABV" />
          </div>
          <div className="form-group">
            <input type="text" id="IBU" placeholder="IBU" />
          </div>
          <div className="form-group">
            <input type="textarea" id="description" placeholder="Description" />
          </div>
          <button className="btn btn-secondary" type="submit">
            Add Keg
          </button>
        </form>
      </div>
    </div>
  );
}
