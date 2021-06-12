import './stylecomponents.scss'
import { useState } from 'react';

//Hook only component


function Toggle ({isToggled, onToggle}) {

    
        return (

            <div class="toggle">
                <img src='./resources/toggle.png' onClick={onToggle}/>
            </div>

        );
    }



export default Toggle;