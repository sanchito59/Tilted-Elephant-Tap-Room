import React from "react";
import PropTypes from "prop-types";
import KegList from "./KegList";

function Admin(props) {
  console.log(props.currentRouterPath);
  return (
    <div>
      <h2>Admin Portal</h2>
      <KegList
        houseKegList={props.houseKegList}
        currentRouterPath={props.currentRouterPath}
      />
    </div>
  );
}

Admin.propTypes = {
  houseKegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
