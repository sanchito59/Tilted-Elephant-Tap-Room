import React from "react";

// Components
import Header from "./Header";
import CrewMember from "./CrewMember";

export default function AboutUs() {
  const employees = [
    {
      title: "Brewmaster",
      fullName: "Mike Shanahan",
      bio:
        "Mike grew up in Southern Colorado, and first starting messing around with home brew kits when he was in high school. His passion grew from there as he fell in love with the science of beer-making. He graduated from Oregon State University with a B.S. in Chemistry and a B.S. in Fermentation Science and has since been continually honing his craft."
    },
    {
      title: "Apprentice Brewmaster",
      fullName: "Marianne Ramirez",
      bio:
        "Marianne found her passion for brewing beer when visiting a microbrew convention and learning about the processes involved in creating beer. She has been apprenticing under Brewmaster Mike Shanahan for 16 months, contributing three of her own beers to the menu."
    },
    {
      title: "Hop Grower",
      fullName: "Andy Serrus",
      bio:
        "Andy Serrus is the farmer responsible for growing the hops we use to craft our delicious in-house beer. He follows a line of hop farmers before him, bringing to the 21st century new agricultural and ecologically viable practices."
    },
    {
      title: "Taproom Pooch",
      fullName: "Otis",
      bio:
        "Otis is a good boy. Yes, he is. You may have seen Otis around, lying under your tables or playing fetch with customers on the back patio. Everyone at Tilted Elephant Tap Room loves our pooch Otis."
    }
  ];

  const aboutUsPage = {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1482412344192-78b24602ae92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80)",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    backgroundAttachment: "fixed"
  };

  const textCenter = {
    textAlign: "center"
  };

  return (
    <div style={aboutUsPage}>
      <Header />
      <div>
        <h1 style={textCenter}>Our Crew</h1>
        {employees.map((employee, index) => (
          <CrewMember
            title={employee.title}
            fullName={employee.fullName}
            bio={employee.bio}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
