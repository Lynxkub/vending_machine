import React from 'react';
import {NavLink} from 'react-router-dom';
import './Choices.css'



const Choices = () => {
    return(
        <div>
            <nav className = 'Choices'>
            <NavLink exact to='/candy'>Candy</NavLink>
            <NavLink exact to='/soda'>Soda</NavLink>
            <NavLink exact to='/fruit'>Fruit</NavLink>
            </nav>
        </div>
    )
}

export default Choices;