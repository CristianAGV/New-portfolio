import React, {useState} from 'react';
import './Slider.css'
import {FaArrowAltCircleRight} from 'react-icons/fa'
import {FaArrowAltCircleLeft} from 'react-icons/fa'



function Slider({projects}) {
    const [current, setCurrent] = useState(0)
    const length = projects.length
    const nextSlideHandler = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
       
    }

    const prevSlideHandler = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)
  return <div className='slider-container'>
      <FaArrowAltCircleLeft onClick={prevSlideHandler} className='leftArrow'/>
      {projects.map((project, index) => {

        return (  <div className={index === current ? 'slider-item active' : 'slider-item'} key={index}>
            { index === current && (<><img src={project.image}/>
              <a href={project.link} target='_blank'><div className='slider-info-container'>
              <div className='slider-info-content'>
                <h3>Technologies used on this project:</h3>
                <span>{project.technologies}</span>
              </div>
              
          </div></a></>) } 
            
      </div> )
      })}
      
      <FaArrowAltCircleRight onClick={nextSlideHandler} className='rightArrow'/>

    
      
  </div>;
}

export default Slider;
