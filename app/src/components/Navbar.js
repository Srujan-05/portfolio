import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">My Portfolio</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
