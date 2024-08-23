import React from 'react'
import './skill.css'
import html from './skill_images/html.png'
import angular from './skill_images/angular.png'
import css from './skill_images/css.png'
import js from './skill_images/js.png'
import nodejs from './skill_images/nodejs.png'
import python from './skill_images/python.png'
import react from './skill_images/react.png'
import wordpress from './skill_images/wordpress.png'

export default function Skill() {

    const skills = [
        { name: 'HTML', imgSrc: html, delay: '200' },
        { name: 'CSS', imgSrc: css, delay: '400' },
        { name: 'JavaScript', imgSrc: js, delay: '600' },
        { name: 'React', imgSrc: react, delay: '800' },
        { name: 'Node.js', imgSrc: nodejs, delay: '1000' },
        { name: 'Python', imgSrc: python, delay: '1200' },
        { name: 'Angular.Js', imgSrc: angular, delay: '1400' },
        { name: 'WordPress', imgSrc: wordpress , delay: '1600'}
      ];
    return (
        <div className='outer_skill'>
            <div className="main_skill">
                <div className="skill_heading">
                    <h1 data-aos="zoom-in-down" data-aos-delay="100"><span style={{color:'white'}}>My</span> Skills</h1>
                </div>
                <div className="skill_container">
                    {skills.map((skill, index) => (
                        <div data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay={skill.delay} key={index} className="skill_item">
                            <div className="skill_img">
                                <img src={skill.imgSrc} alt={skill.name} />
                            </div>
                            <div className="skill_name">
                            <h1>{skill.name}</h1>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}
