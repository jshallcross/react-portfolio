import React from "react";

const Resume = () => (
  <div>
    <h1>Resume</h1>
    <a id="download" href={require(`src\assets\resume\J Shallcross Resume.pdf`).default} download="Jon-Shallcrss-Resume.pdf" target="_blank" rel="noreferrer">
      Download My Resume
    </a>
    <div className="iframe-container  col-lg-12">
    <iframe title="Resume-Download" src="https://docs.google.com/document/d/1AYd5cAErYY-05dzHPjHZ9TL4nQSMn61aOVjm0Y9F8EY/edit?usp=sharing"  frameborder="0"></iframe>
    <p className="phone">Not available to view on Phones. Use iPad or larger to view resume.</p>
    </div>
  </div>
);

export default Resume;