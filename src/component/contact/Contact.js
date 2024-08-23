import React from 'react'
import './contact.css'

export default function contact() {
  return (
    <div className='outer_contactContainer'>
        <div data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease" className="main_contactContainer">
            <div className="contact_heading">
                <h1>Contact Me</h1>
            </div>
            <div className="name_email">
                <input type="text" name="name" id="name" value="Enter Your Name"/>
                <input type="email" name="name" id="email" value="Enter Your Email"/>
            </div>
            <div className="messageBox">
                <input type="text" name='message' id='message' value="Enter Your Message"/>
                <button className='send_message'>Send Message</button>
            </div>
        </div>
    </div>
  )
}
