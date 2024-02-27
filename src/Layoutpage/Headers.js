
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
                <img className='logo' src='https://www.theindiatourism.com/images/logo.webp' alt='not found' />
                <img className='logo' src='https://www.theindiatourism.com/images/atithi-devo-bhava.webp' alt='not found' />
                </div>
                <div>
                    <h6 className='headerEmail'>Email : info@theindiatourism.com</h6>
                    <span>
                        <img src='https://www.theindiatourism.com/images/india.webp' alt='not found' />
                        +91 9549279999
                    </span>
                    {isLoggedIn ? (
                      <button onClick={handleLogout}>Logout</button>
                    ) : (
                    <>
                    <button onClick={handleLogout}>Register</button>
                    <button onClick={handleLogout}>Login</button>
                    </>
                    )}
      
                </div>
            </span>
     
      <ul className="NavBar">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink onClick={Auth}to="/indiatourism">IndiaTourism</NavLink></li>
        <li><NavLink to="/placestovisit">PlacesToVisit</NavLink></li>
        <li><NavLink onClick={Auth} to="/tourpackages">TourPackages</NavLink></li>
        <li><NavLink to="/touroffers">TourOffers</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
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
         </div>
      )}
      </nav>
    
  );
};


export default Headers;