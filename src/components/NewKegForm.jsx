import React from "react";
import Header from "./Header";

export default function NewKegForm() {
  return (
    <div>
      <Header />
      <form>
        <input type="text" id="name" placeholder="Beer" />
        <input type="text" id="brand" placeholder="Brand" />
        <input type="text" id="price" placeholder="Price per pint" />
        <input type="text" id="alcoholContent" placeholder="ABV" />
        <input type="text" id="IBU" placeholder="IBU" />
        <input type="textarea" id="description" placeholder="Description" />
        <button type="submit">Add Keg</button>
      </form>
    </div>
  );
}
