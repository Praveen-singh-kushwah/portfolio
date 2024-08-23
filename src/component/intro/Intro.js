import React from 'react';
import "./intro.css";
import myself from './intro_images/myself.png';
import instagram from './intro_images/instagram.png';
import facebook from './intro_images/facebook.png'
import twiter from './intro_images/twiter.png'

export default function Intro() {
  return (
    <div className='intro_outerContainer'>
      <div className="main_intro">

        <div data-aos="fade-down" data-aos-duration="800" data-aos-easing="ease-out" className="intro_content">
          <div className="intro_name">
            <h2>Hello, <span style={{ color: '#00BF63' }}>I'm</span></h2>
            <h1>Praveen Singh</h1>
            <h2 >Full-Stack Developer</h2>
          </div>
          <h3> Lorem ipsum dolor sit amet consectetur adipisicing Est quos praesentium tempore repudianda</h3>
          <button className='resume'>Resume</button>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out" className="intro_image">
          <img src={myself} alt="" />

          <div className="intro_social_links">
            <div className="intro_social">
              <img src={instagram} alt="" />
            </div>

            <div className="intro_social">
              <img src={facebook} alt="" />
            </div>

            <div className="intro_social">
              <img src={twiter} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
