import './stylecomponents.scss'
import { useState } from 'react';

import useSound from 'use-sound';
import hideSfx from '../resources/sfx/hide.mp3';

//Hook only component


function Toggle ({onToggle}) {
    //handle mouseover animation state
    const [isMouseOver, setMouseOver] = useState(false);
    const [play] = useSound(hideSfx, { volume: 0.25 });


    //change state on hovering
    const handleMouse = () =>{
        
        setMouseOver(true)
    }
    const handleMouseOut = () =>{
        setMouseOver(false)
    }

    const bottom = isMouseOver === false? "-165px" : "-155px";
    //alert(isMouseOver)
      return (

            <div className="toggle" style = {{bottom:bottom}}>
                <img alt=''  src='./resources/toggle.png' 
                            onClick={()=>{onToggle(); play()}}
                            onMouseOver={handleMouse}
                            onMouseOut = {handleMouseOut}
                            
                />
            </div>

        );
    }



export default Toggle;