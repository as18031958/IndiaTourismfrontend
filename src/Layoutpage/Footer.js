import React from 'react'
import './Component.css'
import '../App.css'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <h1 className='text center'>
            All Right Reserved &copy; SAA Tech Pvt Ltd
        </h1>
        <p className='Footer-Link'>
        <NavLink to='/ContactUs'>Contact US</NavLink>|
                <NavLink to='/'>Site Map</NavLink>|
                <NavLink to='/'>Payment Procedure</NavLink>|
                <NavLink to='/'>Terms & Conditions</NavLink>|
        

        </p>
        <div className='FooterContainer'>
                <div className='fontFooter'>
                    <h2>The India Tourism</h2>
                    <h4> 📩: info@theindiatourism.com </h4>
                    
                </div>
                <div className='footerLogo'>
                    <img src='http://www.theindiatourism.com/images/India-tour-footer.jpg' alt='not found'/>
                </div>
                   

            </div>

    </div>
  )
}

export default Footer