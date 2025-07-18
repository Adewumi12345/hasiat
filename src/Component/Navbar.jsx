import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">⚡</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">⚡ home</a></li>
        <li><a href="#cases">cases studies</a></li>
        <li><a href="#about">about us</a></li>
        <li><a href="#careers">careers</a></li>
        <li><a href="#whatwedo">what we do</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className="navbar-right">
        <span role="img" aria-label="flag">🇺🇸</span>
        <span className="language">EN-US ▼</span>
      </div>
    </nav>
  );
};

export default Navbar;