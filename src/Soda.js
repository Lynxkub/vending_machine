import React from 'react';
import {NavLink} from 'react-router-dom';




const Soda = () => {
    return (
        <>
    <h1>The necter of the gods!</h1>
    <NavLink exact to='/'>Return to the vending machine</NavLink>
    </>
    )
}


export default Soda;