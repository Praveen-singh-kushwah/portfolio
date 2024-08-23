import React from 'react'
import './about.css'
import myself from './about_images/about_myself.png'
import instagram from './about_images/instagram.png';
import facebook from './about_images/facebook.png'
import twiter from './about_images/twiter.png'

export default function Aboutme() {
    return (
        <div className='about_outerContainer'>
            <div className="about_main">
                <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="linear" className="about_myImg">
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
                <div className="about_mycontent">
                    <div className="about_intro">
                        <h1 data-aos="fade-right" data-aos-duration="8000" data-aos-easing="linear" className='about_heading'>About Me</h1>
                        <p data-aos="fade-right" data-aos-duration="6000" data-aos-easing="linear">Hey there! I'm Praveen Singh Kushwah, a passionate full-stack developer with a knack for
                            turning ideas into reality through elegant and efficient code. With a blend of creativity
                            and technical expertise, I thrive on building robust web applications and crafting seamless
                            user experiences. I'm driven by a passion for innovation and a commitment to excellence.
                            Whether it's optimizing code for performance, implementing cutting-edge features, or
                            collaborating with cross-functional teams, I thrive in dynamic environments where creativity
                            and problem-solving are valued.</p>
                    </div>
                    <div data-aos="fade-right" data-aos-offset="100" data-aos-duration="4000" data-aos-easing="linear" className="about_btn">
                        <button className='resume'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
