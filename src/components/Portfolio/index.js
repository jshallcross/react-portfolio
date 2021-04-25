import React from "react";
import Project from "../Projects"

import password from"../../assets/images/screenshot.png";
import workday from"../../assets/images/workday.png";
import weather from"../../assets/images/weather.png";
import team from"../../assets/images/team.png";

function Portfolio() {
   
    const projects = [
      {
          name: 'Password Generator',
          title: 'Password Generator',
          description: 'A password Generator made using HTML, CSS and JavaScript. It allows you to generate a password with uppercase,lowercase, numbers and symbols',
          imageURL: password,
          appLink: "https://jshallcross1.github.io/password-generator/",
          githubLink: "https://github.com/jshallcross1/password-generator"
      },
      {
        name: 'Weather Dashboard',
        imageURL: weather,
        appLink: "https://jshallcross1.github.io/weather-dashboard/",
        githubLink: "https://github.com/jshallcross1/weather-dashboard"
    },
      {
          name: 'Work Day Scheduler',
          imageURL: workday,
          appLink: "https://jshallcross1.github.io/work-day-scheduler/",
          githubLink: "https://github.com/jshallcross1/work-day-scheduler"
      },
      {
        name: 'Team Profile Generator',
        imageURL: team,
        appLink: "https://youtu.be/ZGmfErWGRjE",
        githubLink: "https://github.com/jshallcross1/Team-Profile-Generator"
    },

  ];
    return (
      <div className="row">
          <div className="col-xs-12 ">
              <div className="card bg-dark">
                  <div className="card-body">
                      <h1 className="card-title" title="Portfolio">Portfolio</h1>
                      <hr></hr>
                      <Project projects={projects}/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
  export default Portfolio;