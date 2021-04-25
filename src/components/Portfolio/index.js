import React from "react";
import Project from "../Projects"

import password from"../../assets/images/screenshot.png";
import note from"../../assets/images/note.gif";
import weather from"../../assets/images/weather.png";
import budget from"../../assets/images/budget.png";

function Portfolio() {
   
    const projects = [
      {
          name: 'Password Generator',
          description: 'A password Generator made using HTML, CSS and JavaScript. It allows you to generate a password with uppercase,lowercase, numbers and symbols',
          imageURL: password,
          appLink: "https://jshallcross1.github.io/password-generator/",
          githubLink: "https://github.com/jshallcross1/password-generator"
      },
      {
        name: 'Weather Dashboard',
        description: 'This site allows users to search for a city and receive the 5 day forecast. This was built using HTML, CSS, JavaScript and uses a 3rd party API to retrieve the weather data.',
        imageURL: weather,
        appLink: "https://jshallcross1.github.io/weather-dashboard/",
        githubLink: "https://github.com/jshallcross1/weather-dashboard"
    },
      {
          name: 'Note Taker',
          description:'This app allows users to create, edit and delete notes. This RESTful app was made with HTML, CSS, JavaScript ',
          imageURL: note,
          appLink: "https://intense-lake-32151.herokuapp.com/",
          githubLink: "https://github.com/jshallcross1/Note-Taker"
      },
      {
        name: 'Budget Tracker',
        description: 'Budget Tracker PWA is a simple way to keep track of you finances. This Progressive Web Application(PWA) allows users to keep track of their finances even without a stable internet connection.',
        imageURL: budget,
        appLink: "https://stark-journey-03934.herokuapp.com/",
        githubLink: "https://github.com/jshallcross1/Budget_Tracker-PWA"
    },

  ];
    return (
      <div className="row ">
          <div className="col-xs-12 ">
              <div className="card ">
                  <div className="card-body ">
                      <h1 className="card-title" id="Portfolio">Portfolio</h1>
                      <hr></hr>
                      <Project projects={projects}/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Portfolio;