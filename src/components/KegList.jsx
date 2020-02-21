import React from "react";
import PropTypes from "prop-types";

// Components
import Header from "./Header";
import Keg from "./Keg";

export default function KegList(props) {
  const kegListPage = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1575844537064-29b4655170a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    paddingBottom: "10px"
  };

  return (
    <div style={kegListPage}>
      <Header />
      {props.houseKegList.map(keg => (
        <Keg
          {...keg}
          sellingOfHousePint={props.updateHousePints}
          key={keg.id}
        />
      ))}
      {props.kegList.map(keg => (
        <Keg {...keg} sellingOfPint={props.updatePints} key={keg.id} />
      ))}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  houseKefList: PropTypes.array
};
