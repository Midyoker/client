import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/content">Analyze</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
