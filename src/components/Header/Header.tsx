import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="mainHeader">
      <div className="logo">
        <img src="./assets/images/logo.svg" alt="logo" />
      </div>
      <div className="title">
        <h1>renderer and editor for the JSON file</h1>
      </div>
    </header>
  );
}

export default Header;
