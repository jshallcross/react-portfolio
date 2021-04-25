  
import React from 'react';

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
