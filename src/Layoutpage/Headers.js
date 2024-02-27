
import React, { useState,useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Component.css';
import "../App.css" 

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false); 
    navigate('/login'); 
  };

  const Auth = async ()=>{
    const token = localStorage.getItem("token")
       if(!token){
         alert("login First!")
         navigate('/login')
       }
   }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); 
    }
  }, []);

  const toggleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
     <nav>
    
      <span className='TopNav'>
                <div className='innerLogo'>
                <img className='logo' src='http://www.theindiatourism.com/images/logo.webp' alt='not found' />
                <img className='logo' src='http://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='not found' />
                </div>
                <div>
                    <h6 className='headerEmail'>Email : info@theindiatourism.com</h6>
                    <span>
                        <img src='http://www.theindiatourism.com/images/india.webp' alt='not found' />
                        +91 9549279999
                    </span>
                </div>
            </span>
     
      <ul className="NavBar">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink onClick={Auth}to="/indiatourism">IndiaTourism</NavLink></li>
        <li><NavLink to="/placestovisit">PlacesToVisit</NavLink></li>
        <li><NavLink onClick={Auth} to="/tourpackages">TourPackages</NavLink></li>
        <li><NavLink to="/touroffers">TourOffers</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        {isLoggedIn ? (
          <>
          <li>
            <NavLink onClick={handleLogout}>Logout</NavLink>
          </li>
          </>
        ) : (
          <>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </>
        )}
      </ul>
      <button className="hamburger-menu" onClick={toggleHamburgerMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {isOpen && (
        <div className="nav-links-mobile">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/indiatourism">IndiaTourism</NavLink></li>
        <li><NavLink to="/placestovisit">PlacesToVisit</NavLink></li>
        <li><NavLink to="/tourpackages">TourPackages</NavLink></li>
        <li><NavLink to="/touroffers">TourOffers</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
             
        {isLoggedIn ? (
          <>
          <li>
          <NavLink onClick={handleLogout}>Logout</NavLink>
          </li>
          </>
        ) : (
          <>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </>
        )}

        </div>
      )}
      </nav>
    
  );
};


export default Headers;