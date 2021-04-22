
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [navSelected, setNavSelected] = useState("About");
  return (
    <div className="App">
        <Header navSelected = {navSelected} setNavSelected = {setNavSelected}/>
        <Footer />
    </div>
  );
}

export default App;
