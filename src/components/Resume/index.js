import React from "react";

const Resume = () => (
  <div>
    <h1>Resume</h1>
    <a id="download" href={require(`../../assets/resume/Jon-Shallcross-Resume.pdf`).default} download="Jon-Shallcrss-Resume.pdf" target="_blank" rel="noreferrer">
      Download My Resume
    </a>
    <div className="iframe-container  col-lg-12">
    <iframe title="Resume-Download" src="https://docs.google.com/document/d/1DKU-MI3sMbzRnugSO4sk2f5e-wEMNXISzPXeuC86sVk/edit?usp=sharing"  frameborder="0"></iframe>
    <p className="phone">Not available to view on Phones. Use iPad or larger to view resume.</p>
    </div>
  </div>
);

export default Resume;