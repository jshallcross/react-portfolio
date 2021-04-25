import React from 'react';


function Footer()
{   
    return (
        <footer className="text-center">
            <div className=" container p-4">
                <a className="btn btn-outline-dark btn-lg m-2" href="https://github.com/jshallcross" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
                </a>
                <a className="btn btn-outline-dark btn-lg m-2" href="https://www.linkedin.com/in/jon-shallcross" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-outline-dark btn-lg m-2" href="https://twitter.com/j_shallcrossdev" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;