import React from 'react'
import './Card.css'
function Cards(props) {
    
    return (
        <div className='skill-card'>
            <div className='icon-container'>
                <i>{props.icon}</i>
            </div>
            
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Cards
