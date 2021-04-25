
import React, { useState } from 'react';
import Navigation from '../Navigation';
import Resume from '../Resume';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';



function Header() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {

    switch (currentPage) {
      case 'Resume':
        return <Resume/>;
      case 'Portfolio':
        return <Portfolio/>;
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