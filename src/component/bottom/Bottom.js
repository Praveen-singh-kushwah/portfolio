import React from 'react';
import './bottom.css';
import instagram from './bottom_img/instagram.png';
import facebook from './bottom_img/facebook.png';
import twiter from './bottom_img/twiter.png';

export default function Bottom() {
    return (
        <div className='outer_bottomContainer'>
            <div className="main_bottomContainer">
                <div className="name_bottom">
                    <h1>Praveen <span style={{color:'white'}}>Singh</span></h1>
                    <p>Full-Stack Developer</p>
                </div>
                <div className="social_bottom">
                    <div className="bottom_social">
                        <img src={instagram} alt="" />
                    </div>

                    <div className="bottom_social">
                        <img src={facebook} alt="" />
                    </div>

                    <div className="bottom_social">
                        <img src={twiter} alt="" />
                    </div>
                </div>
                <div className="copyright">
                    <p>® All Rights Are Reserved</p>
                </div>
            </div>
        </div>
    )
}
