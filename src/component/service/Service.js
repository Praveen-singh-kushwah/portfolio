import React from 'react'
import web from './service_images/web.png'
import uiux from './service_images/uiux.png'
import content from './service_images/content.png'
import './service.css'

export default function Service() {

  return (
    <div className='outer_serviceContainer'>
      <div className="main_serviceContainer">
        <div data-aos="zoom-in-down" className="service_heading_content">
            <h1><span style={{color:'white'}}>My</span> Services</h1>
            <h3>What I Do</h3>
        </div>

        <div className="service_items">
            <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800" data-aos-easing="ease-in-out" className="item_service">
                <div className="service_itemImg">
                    <img src={web} alt="" />
                </div>
                <div className="service_imgHeading">
                    <h1>Full-Satck Developer</h1>
                </div>
                <div className="service_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur </p>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800" data-aos-easing="ease-in-out" className="item_service">
                <div className="service_itemImg">
                    <img src={uiux} alt="" />
                </div>
                <div className="service_imgHeading">
                    <h1>UI/UX Designer</h1>
                </div>
                <div className="service_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur </p>
                </div>
            </div>

            <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="800" data-aos-easing="ease-in-out" className="item_service">
                <div className="service_itemImg">
                    <img src={content} alt="" />
                </div>
                <div className="service_imgHeading">
                    <h1>Content Creator</h1>
                </div>
                <div className="service_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
