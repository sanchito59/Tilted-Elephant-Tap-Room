import React from "react";
import Header from "./Header";

export default function HomePage() {
  const homePageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  };
  return (
    <div>
      <Header />
      <div style={homePageStyle}></div>
    </div>
  );
}
