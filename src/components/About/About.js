import React from 'react'
import './About.css'
import Fade from 'react-reveal/Fade';
function About() {
    return (
        <section className='section-container' id='about'>
            <h2 className='section-title'>About Me</h2>
            <div className='about-container'>
                <Fade left>
                    <div className='about-image-section'>
                        <div className='about-image-box'>
                            <div className='image-container'>
                                <img src='./about.jpg' alt='profile'/>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className='about-info'>
                        <h3>What motivated me to become a web developer?</h3>
                        <p>Since I was a child I have been fascinated by technology, computers, software, hardware, etc. As I grew up many questions invaded me, how did they create the computer? what is an algorithm and why are they important? but the most important for me was how to create a web page, with this question began my motivation and today I have no concrete answer because I am constantly learning, every day!</p>
                    </div>
                </Fade>
               
            </div>

        </section>
    )
}

export default About
