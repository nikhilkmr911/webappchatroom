import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ signUserOut }) {
  // Get the current pathname using useLocation
  const location = useLocation();

  // Define a function to determine if a given link should be highlighted
  const isLinkActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className={`nav-item ${isLinkActive('/') ? 'active' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`nav-item ${isLinkActive('/mech') ? 'active' : ''}`}>
          <Link to="/mech">Mechanics</Link>
        </li>
        <li className={`nav-item ${isLinkActive('/premium') ? 'active' : ''}`}>
          <Link to="/premium">Premium QnA</Link>
        </li>
        <li>
          <button onClick={signUserOut} className="btn btn-danger">
            Sign Out
          </button>
        </li>
      </ul>
    </nav>
  );
}
