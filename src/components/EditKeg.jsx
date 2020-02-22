import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

export default function EditKeg(props) {
  // Style
  const editKegForm = {
    backgroundColor: "slategrey",
    padding: "16px"
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

  function handleEditKegSubmission(e) {
    e.preventDefault();
    // Line 33 function needs to change
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
    <div style={editKegForm}>
      <h2>Edit -keg name-</h2>
      <div style={formStyle}>
        <form onSubmit={handleEditKegSubmission}>
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

EditKeg.propTypes = {
  onNewKegAddition: PropTypes.func
};
