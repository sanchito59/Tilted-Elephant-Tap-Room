import React from "react";
import Header from "./Header";
import Keg from "./Keg";

export default function KegList() {
  const availableKegs = [
    {
      name: "African Amber",
      brand: "Mac & Jack's",
      price: "5.49",
      alcoholContent: "6.7",
      IBU: "30",
      description:
        "This beer erupts with a floral, hoppy taste, followed by a well rounded malty middle, finishing with a nicely organic hop flavor."
    },
    {
      name: "Ruby",
      brand: "McMenamins",
      price: "4.50",
      alcoholContent: "4.13",
      IBU: "5",
      description:
        "An ale that's light, crisp and refreshingly fruity. Great Western Premium 2-Row and 42 pounds of Oregon-grown raspberry puree is used to craft every colorful batch."
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
          IBU={keg.IBU}
          description={keg.description}
        />
      ))}
    </div>
  );
}
