import React from 'react'
import './Skills.css'
import {FaNodeJs} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaJsSquare} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaDatabase} from 'react-icons/fa'
import {FaHtml5} from 'react-icons/fa'
import Card from './Card'
const skillsData = [
    {
        name: 'Node Js',
        icon: <FaNodeJs/>,
        description: "Node. js is perfect for creating streaming web applications, server-side apps or microservices. Node is recognized as an amazing and scalable framework for many businesses."
    },
    {
        name: 'React.js',
        icon: <FaReact/>,
        description: "React is an efficient, declarative, and flexible open-source JavaScript library for building simple, fast, and scalable frontends of web applications."
    },
    {
        name: 'Javascript',
        icon: <FaJsSquare/>,
        description: "JavaScript allows users to interact with web pages. There are almost no limits to the things you can do with JavaScript on a web page."
    },
    {
        name: 'Html',
        icon: <FaHtml5/>,
        description: "HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript."
    },
    {
        name: 'CSS',
        icon: <FaCss3/>,
        description: "CSS helps you to keep the informational content of a document separate from the details of how to display it."
    },
    {
        name: 'MySQL',
        icon: <FaDatabase/>,
        description: "rely on MySQL to save time and money powering your high-volume Web sites, business-critical systems and packaged software."
    }

]


function Skills() {
    return (
        <section className='section-container' id='skills'>
            <h2 className='section-title'>Skills I Have</h2>
            <div className='skills-container'>
                {skillsData.map(skill => <Card title={skill.name} icon={skill.icon} description={skill.description}/>)}
            </div>
        </section>
    )
}

export default Skills
