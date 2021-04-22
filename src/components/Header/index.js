
import React, { useState } from 'react';
import Navigation from '../Navigation';
import Resume from '../Resume';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

function Header() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {

    switch (currentPage) {
      case 'Resume':
        return <Resume/>;
      case 'Projects':
        return <Projects/>;
      case 'Contact':
        return <Contact/>;
      default:
        return <About/>

    }

  };

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          <div> {renderPage(currentPage)} </div> 
        }
      </div>
    </div>
  );
}


export default Header;