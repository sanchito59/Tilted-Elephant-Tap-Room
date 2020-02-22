import React from "react";
import PropTypes from "prop-types";
import KegList from "./KegList";

function Admin(props) {
  return (
    <div>
      <h2>Admin Portal</h2>
      <KegList houseKegList={props.houseKegList} />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  houseKegList: PropTypes.array
};

export default Admin;
