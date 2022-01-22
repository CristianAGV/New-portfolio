import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import './Hero.css'
function Hero() {

    let [isOpen, setIsOpen] = useState(false)

    const openNavHandler = () => {
        setIsOpen(true)
    }

    const closeNavHandler = () => {
        setIsOpen(false)
    }


    return (
        <div className='hero-container' id='home'>
           <header>
               <FaBars className='hamburger-icon' onClick={openNavHandler}/>
                <ul className={isOpen ? 'navbar menu-active' : 'navbar'}>
                    <FaTimes className='close-icon' onClick={closeNavHandler}/>
                    <li><a href='#home' className='navbar-link' onClick={closeNavHandler}>Home</a></li>
                    <li><a href='#skills' className='navbar-link' onClick={closeNavHandler}>Skills</a></li>
                    <li><a href='#about' className='navbar-link' onClick={closeNavHandler}>About Me</a></li>
                    <li><a href='#projects' className='navbar-link' onClick={closeNavHandler}>Projects</a></li>
                    <a href='#contact' className='navbar-btn' onClick={closeNavHandler}>Get in touch</a>
                </ul>
            </header> 
            <section className='hero-section'>
                <div className='hero-description'>
                    <h1>Hello World, I Am <br></br><span className='custom-name'>Cristian Gutierrez</span></h1>
                    <p>A fullstack web developer willing to help you take your business to the next level.</p>
                </div>
                <div className='hero-image'>
                    <img src='./cyborg.png' alt='illustration'></img>
                </div>
            </section>
        </div>
    )
}

export default Hero
