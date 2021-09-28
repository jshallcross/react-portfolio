import React from "react";

const About = () => (
  <div className="header-container">
    <h1>About Me</h1> 
    <div className="header-content">
      <div className="name">
        <span className="blue">Jon </span>
        Shallcross
      </div>
    </div>
    <div className="img-container">
      <div className="image">
        <img src= {require(`../../assets/images/jon_1.png`).default} alt="Pic of Jon Shallcross in a white shirt"></img>
      </div>
      <div className="about-content ">
        <p className="about-text">
          <span className="blue" id="title">Full Stack Web Developer </span><br></br>
          I recently received my Certificate from The University of Toronto Coding Boot Camp and am looking to move out of the hospitality industry. The hospitality industry has taught me everything you need to know about customer service, how to keep a customer happy and truly understand what a customer is looking for even when they are not clear on what they want. This is a valuable asset I will bring to the table as a web developer.
        </p>
        <p className="about-text">
        I currently reside in Burlington Ontario with my three kids. From March 2020 until my enrolment at the University of Toronto coding boot camp in November I have been self learning web development. Through the course I have learned HTML, CSS, JavaScript, jQuery, Bootstrap, Node.js, Express.js, AJAX, SQL, MongoDB, OOP/TDD, ORM/MVC, PWA and React.
        </p>
        <p className="about-text">
        The University of Toronto boot camp is the final piece of the puzzle which will allow me to make the career change I have been looking for. I hope you like the projects I have on my website and look forward to talking with you soon. 
        </p>
      </div>    
      </div>
  </div>
 
);

export default About;