import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

// Components
import Header from "./Header";

export default function NewKegForm(props) {
  // Style
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

  // Functionality
  let _name = null;
  let _brand = null;
  let _alcoholContent = null;
  let _IBU = null;
  let _description = null;
  let _pintsLeftInKeg = 124;

  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegAddition({
      name: _name.value,
      brand: _brand.value,
      alcoholContent: _alcoholContent.value,
      IBU: _IBU.value,
      description: _description.value,
      pintsLeftInKeg: _pintsLeftInKeg,
      id: v4()
    });
    _name = "";
    _brand = "";
    _alcoholContent = "";
    _IBU = "";
    _description = "";
  }

  return (
    <div style={newKegFormPage}>
      <Header />
      <div style={formStyle}>
        <form onSubmit={handleNewKegFormSubmission}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              placeholder="Beer"
              ref={inputVal => {
                _name = inputVal;
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="brand"
              placeholder="Brand"
              ref={inputVal => {
                _brand = inputVal;
              }}
            />
          </div>
          <div className="form-group">
            <input type="text" id="price" placeholder="Price per pint" />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="alcoholContent"
              placeholder="ABV"
              ref={inputVal => {
                _alcoholContent = inputVal;
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="IBU"
              placeholder="IBU"
              ref={inputVal => {
                _IBU = inputVal;
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="textarea"
              id="description"
              placeholder="Description"
              ref={inputVal => {
                _description = inputVal;
              }}
            />
          </div>
          <button className="btn btn-secondary" type="submit">
            Add Keg
          </button>
        </form>
      </div>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegAddition: PropTypes.func
};
