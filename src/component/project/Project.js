import React from 'react';
import './project.css';
import img1 from './project_image/img1.png'
import img2 from './project_image/img2.png'
import img3 from './project_image/img3.png'
import img4 from './project_image/img4.png'
import img5 from './project_image/img5.png'
import img6 from './project_image/img6.png'

export default function Project() {
  return (
    <div className='project_outercontainer'>
      <div className="main_outerContainer">
        <div className="project_heading">
            <h1 data-aos="zoom-in-down">Projects</h1>
        </div>
        <div className="project_items">
            <div data-aos="fade-down" data-aos-delay='200' data-aos-duration="1000" data-aos-easing="ease-in-out" className="project_itemImg">
                <img src={img1} alt="" />
            </div>

            <div data-aos="fade-down" data-aos-delay='400' data-aos-duration="1000" data-aos-easing="ease-in-out" className="project_itemImg">
                <img src={img2} alt="" />
            </div>

            <div data-aos="fade-down" data-aos-delay='600' data-aos-duration="1000" data-aos-easing="ease-in-out" className="project_itemImg">
                <img src={img3} alt="" />
            </div>

            <div data-aos="fade-down" data-aos-delay='800' data-aos-duration="1000" data-aos-easing="ease-in-out" className="project_itemImg">
                <img src={img4} alt="" />
            </div>

            <div data-aos="fade-down" data-aos-delay='1000' data-aos-duration="1000" data-aos-easing="ease-in-out" className="project_itemImg">
                <img src={img5} alt="" />
            </div>

            <div data-aos="fade-down" data-aos-delay='1200' data-aos-duration="1000" data-aos-easing="ease-in-out" className="project_itemImg">
                <img src={img6} alt="" />
            </div>

        </div>
      </div>
    </div>
  )
}
