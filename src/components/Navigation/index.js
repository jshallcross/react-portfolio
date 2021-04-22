  
import React from 'react';

/*
function Navigation(props)
{   
    const {navSelected , setNavSelected} = props;
    return (
        <div className= "collapse navbar-collapse"  id="navbarNav">
            <ul className="navbar-nav">
                <li className={`nav-item btn ${navSelected === "About" && "active"}`}>
                    <span className="nav-link" onClick={()=>setNavSelected("About")}>About me</span>
                </li>
                <li className={`nav-item btn ${navSelected === "Projects" && "active"}`}>
                    <span className="nav-link" onClick={()=>setNavSelected("Projects")}>Portfolio</span>
                </li>
                <li className={`nav-item btn ${navSelected === "Contact" && "active"}`}>
                    <span className="nav-link" onClick={()=>setNavSelected("Contact")}>Contact</span>
                </li>
                <li className={`nav-item btn ${navSelected === "Resume" && "active"}`}>
                    <span className="nav-link" onClick={()=>setNavSelected("Resume")}>Resume</span>
                </li>
            </ul>
        </div>
    );
};
*/
function Navigation(props) {
    const tabs = [ 'About', 'Projects', 'Contact', 'Resume'];
    return (
         
            <ul className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">JS</a>
                {tabs.map(tab => (
                <li className="nav-item" key={tab}>
            <a
                href={'#' + tab.toLowerCase()}
                onClick={() => props.handlePageChange(tab)}
                className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
            >
                {tab}
            </a>
            </li>
            ))}
        </ul>
    
    );
}




export default Navigation;
