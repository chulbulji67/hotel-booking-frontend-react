import React, {useState} from 'react'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';

export default function Navbar({isLoggedIn, setIsLoggedIn}) {
  
  const navigate = useNavigate();
  const role = localStorage.getItem('roles');

  const handleLogout = () => {
    // Perform logout actions, such as clearing localStorage or sending logout request to server
    setIsLoggedIn(false); // Update authentication status
    authService.logout();
    navigate("/home")

};


  // Define your open and close menu functions
  const openMenu = () => {
    // Implementation to open the menu
    document.getElementById('sidemenu').style.right = "0";
  };

  const closeMenu = () => {
    // Implementation to close the menu
    document.getElementById('sidemenu').style.right = "-200px"; // Adjust as necessary
  };

  return (
    <div id="header">
      <div className="container">
        <nav>
          <img src="logo.png" alt="logo" className="logo" />
          <ul id="sidemenu">
            {isLoggedIn ? (
              <>
                <li><Link to="/home">Home</Link></li>
                {role === 'ROLE_ADMIN' && <li><Link to="/add-hotel">Add Hotel</Link></li>}
                <li><Link to="/home" onClick={handleLogout}>Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
              </>
            )}
            <FontAwesomeIcon icon={faX} onClick={closeMenu} className='fa-solid close' />
          </ul>
          <FontAwesomeIcon icon={faBars} onClick={openMenu} className='fa-solid open' />
        </nav>
      </div>
    </div>
  )
}
