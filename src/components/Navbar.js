import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Content">Analyze</Link></li>
        </ul>
    </div>
  )
}

export default Navbar