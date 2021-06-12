import './stylecomponents.scss'
import { useState } from 'react';

//Hook only component

function Button({icon, handleClick}){
    
    return (

            <div class='button'>
                    <img src='./resources/fondo.png' onClick={handleClick}/>
                    {icon}
                    
             </div>

        );
    }



export default Button;