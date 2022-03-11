import React from 'react';
import {NavLink} from 'react-router-dom';


const Fruit = () => {
    return (
        <>
    <h1>Do you really truse fruit from a vending machine?</h1>
    <NavLink exact to='/'>Return to the vending machine</NavLink>

    </>
    )
}

export default Fruit;