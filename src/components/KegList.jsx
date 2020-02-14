import React from "react";
import Header from "./Header";
import Keg from "./Keg";

export default function KegList() {
  return (
    <div>
      <Header />
      <Keg
        name="Amber Jack"
        brand="Mac and Jack"
        price="5.49"
        alcoholContent="6.7%"
        description="Warm, nutty, oaken"
      />
    </div>
  );
}
