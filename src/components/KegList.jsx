import React from "react";
import Header from "./Header";
import Keg from "./Keg";

export default function KegList() {
  const availableKegs = [
    {
      name: "African Amber",
      brand: "Mac & Jack's",
      price: "5.49",
      alcoholContent: "6.7%",
      description:
        "This beer erupts with a floral, hoppy taste, followed by a well rounded malty middle, finishing with a nicely organic hop flavor."
    }
  ];
  return (
    <div>
      <Header />
      {availableKegs.map((keg, index) => (
        <Keg
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          description={keg.description}
        />
      ))}
    </div>
  );
}
