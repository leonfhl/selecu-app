import './stylecomponents.scss'
import { useState } from 'react';

import useSound from 'use-sound';
import popSfx from '../resources/sfx/pop.mp3';

//Hook only component

function Button({icon, handleClick}){
    //handle to playPop
    const [play] = useSound(popSfx, { volume: 0.25 });
    
    //handle mouseover animation state
    const [isMouseOver, setMouseOver] = useState(true);

    //change state on hovering
    const handleMouse = () =>{
        play();
        setMouseOver(false)
    }
    const handleMouseOut = () =>{
        setMouseOver(true)
    }

    //alert(isMouseOver)


    //style animation when mouse over
    let   styleButtonOver = {};
    if (isMouseOver === false) 
         styleButtonOver = {
            position: "relative",
            bottom: "5px",
            filter: 'drop-shadow(0px 7px 5px gray)',
        }   
  
    return (

            <div className='button' style={styleButtonOver}>
                    <img alt=''  src='./resources/fondo.png' 
                        onClick={handleClick}
                        onMouseOver={handleMouse}
                        onMouseOut = {handleMouseOut}
                    />
                    {icon}
                    
             </div>

        );
    }



export default Button;