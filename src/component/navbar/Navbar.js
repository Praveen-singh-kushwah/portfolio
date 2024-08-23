import React from 'react';
import {Link} from 'react-scroll';
import logo from './logo.png'
import './navbar.css'

export default function Navbar() {
  return (
    <div className="nav_outer_container">
      <div className='nav_inner_container'>

        <div className="logo">
          <img data-aos="zoom-in-right" src={logo} alt="" />
        </div>

        <div className="nav_items">
          <ul>
            <li><Link to={"intro_outerContainer"} smooth={true} offset={-100} duration={1000} data-aos="zoom-in" data-aos-duration="100" data-aos-easing="ease-in" className='nav_pages'>Home</Link></li>
            <li><Link to={"about_outerContainer"} smooth={true} offset={-100} duration={1000} data-aos="zoom-in" data-aos-duration="100" data-aos-easing="ease-in" className='nav_pages'>About Me</Link></li>
            <li><Link to={"outer_skill"} smooth={true} offset={-20} duration={1000} data-aos="zoom-in" data-aos-duration="100" data-aos-easing="ease-in" className='nav_pages'>Skills</Link></li>
            <li><Link to={"outer_serviceContainer"} smooth={true} offset={-110} duration={1000} data-aos="zoom-in" data-aos-duration="100" data-aos-easing="ease-in" className='nav_pages'>Services</Link></li>
            <li><Link to={"project_outercontainer"} smooth={true} offset={-50} duration={1000} data-aos="zoom-in" data-aos-duration="100" data-aos-easing="ease-in" className='nav_pages'>Projects</Link></li>
            <li><Link to={"outer_contactContainer"} smooth={true} offset={-40} duration={1000} data-aos="zoom-in" data-aos-duration="100" data-aos-easing="ease-in" className='nav_pages'>Contact us</Link></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

  