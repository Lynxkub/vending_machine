import React from 'react';
import {NavLink} from 'react-router-dom';



const Candy = () => {
    return(
        <>
         <h1>Don't eat too much candy!</h1>
         <NavLink exact to='/'>Return to the vending machine</NavLink>
         </>
    )
}


export default Candy;