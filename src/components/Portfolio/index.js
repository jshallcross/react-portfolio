import React from "react";
import Project from "../Projects"

import addProduct from"../../assets/images/addproduct.png";
import note from"../../assets/images/note.gif";
import weather from"../../assets/images/weather.png";
import budget from"../../assets/images/budget.png";
import team from"../../assets/images/team.png";
import workday from"../../assets/images/workday.png";

function Portfolio() {
   
    const projects = [
      {
          name: 'CurrenSeed',
          description: 'Currenseed is an online farmer’s market. This site allows users to create Kiosks to sell their products as well as buy from local vendors.',
          imageURL: addProduct,
          appLink: "https://currenseed.herokuapp.com/",
          githubLink: "https://github.com/DJ-KARMA/currenseed"
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
    {
      name: 'Team Profile Generator',
      description:'This backend app allows users to use the command line to create a team. Once finished this app will generate a HTML file with your team members.',
      imageURL: team,
      appLink: "https://youtu.be/ZGmfErWGRjE",
      githubLink: "https://github.com/jshallcross1/Team-Profile_Generator"
  },
  {
    name: 'Work Day Scheduler',
    description: 'This scheduler allows users to keep track of daily tasks or appointments. It was made with HTML, CSS, JavaScrip and jQuery.',
    imageURL: workday,
    appLink: "https://jshallcross.github.io/work-day-scheduler",
    githubLink: "https://github.com/jshallcross1/work-day-scheduler"
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