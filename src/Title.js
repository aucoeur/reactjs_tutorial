import React from "react";
import { NavLink } from 'react-router-dom';
import "./Title.css";

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>THIS IS TITLE</h1>
        <div className="Title-Subtitle">This is subtitular!</div>

        <div>
          <NavLink 
            className="nav-link"   
            activeClassName="nav-link-active" 
            exact 
            to="/">List</NavLink>
          <NavLink 
            className="nav-link"   
            activeClassName="nav-link-active" 
            to="/about">About</NavLink>
        </div>

      </header>
    </div>
  );
}

export default Title;
