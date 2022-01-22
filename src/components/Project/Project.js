import React from 'react'
import Slider from './Slider'
import projectsData from './ProjectsData'
import Bounce from 'react-reveal/Bounce';
import './Project.css'


function Projects() {
    return (
        <section className='section-container' id='projects'>
            <h2 className='section-title'>My Projects</h2>
            <Bounce bottom>
                <p className='project-section-text'>These are some of the projects I made. <br></br><br></br><span className='custom-name'>I hope you like them!</span></p>
                <Slider projects={projectsData}/>
            </Bounce>
            
        </section>
    )
}

export default Projects
