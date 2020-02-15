import React from "react";
import { Link } from "react-router-dom";
import "./../App.scss";

// Components
import Header from "./Header";

export default function HomePage() {
  const homePageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
  };

  const attraction = {
    backgroundColor: "black",
    color: "white"
  };

  return (
    <div style={homePageStyle}>
      <Header />
      <div>
        <div className="row justify-content-md-center mt-5">
          <div
            className="col col-lg-3 col-md-12 col-sm-12 justify-content-md-center p-4 m-3"
            style={attraction}
          >
            <img
              src="https://static.wixstatic.com/media/660812_a81bece77b7f486fb3d7bdc3682d37b6~mv2.png/v1/fill/w_75,h_75,al_c,q_85,usm_0.66_1.00_0.01/660812_a81bece77b7f486fb3d7bdc3682d37b6~mv2.webp"
              alt=""
            />
            <h3>DRINKS</h3>
            <p>
              Enjoy over 26 taps of craft beer, cider and wine to enjoy here or
              fill a growler to go. There are always options for easy drinking,
              some for the hop heads, and some of those extremely hard beers to
              find.
            </p>
            <h4>
              <Link className="blackBackgroundHover" to="/kegs">
                VIEW BEER MENU
              </Link>
            </h4>
          </div>
          <div
            className="col col-lg-3 col-md-12 col-sm-12 justify-content-md-center p-4 m-3"
            style={attraction}
          >
            <img
              src="https://static.wixstatic.com/media/660812_a0de17c0691c4555b339039bbad1ce59~mv2.png/v1/fill/w_71,h_70,al_c,q_85,usm_0.66_1.00_0.01/660812_a0de17c0691c4555b339039bbad1ce59~mv2.webp"
              alt=""
            />
            <h3>FOOD</h3>
            <p>
              When you come to Tilted Elephant Tap Room, you’ll know our food
              was not an afterthought. We have worked hard over the years and
              partnered with talented chefs to take our food to new creative
              heights within the bar food space.
            </p>
          </div>
          <div
            className="col col-lg-3 col-md-12 col-sm-12 justify-content-md-center p-4 m-3"
            style={attraction}
          >
            <img
              src="https://static.wixstatic.com/media/660812_5c4ae7e9ddfa4b98944725ba5b527334~mv2.png/v1/fill/w_83,h_84,al_c,q_85,usm_0.66_1.00_0.01/660812_5c4ae7e9ddfa4b98944725ba5b527334~mv2.webp"
              alt=""
            />
            <h3>EVENTS</h3>
            <p>
              Corn hole tournaments
              <br></br>
              Tuesday Trivia - 7:00 P.M.
              <br></br>
              Live music
              <br></br>
              SPECIAL EVENTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
