import React from 'react';
import "../App.css"
function Navbar({ scrollToSection }) {
  return (
    <nav className="navbar" style={{justifyContent: 'center', position: 'fixed'}}>
      <ul className="navbar-list">
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('project')}>Projects</li>
        <li onClick={() => scrollToSection('resume')}>Resume</li>
      </ul>
    </nav>
  );
}

export default Navbar;


