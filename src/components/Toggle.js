import './stylecomponents.scss'
import { useState } from 'react';

//Hook only component


function Toggle ({onToggle}) {
    //handle mouseover animation state
    const [isMouseOver, setMouseOver] = useState(false);

    //change state on hovering
    const handleMouse = () =>{
        setMouseOver(true)
    }
    const handleMouseOut = () =>{
        setMouseOver(false)
    }

    const bottom = isMouseOver === false? "-175px" : "-165px";
    //alert(isMouseOver)
      return (

            <div className="toggle" style = {{bottom:bottom}}>
                <img alt=''  src='./resources/toggle.png' 
                            onClick={onToggle}
                            onMouseOver={handleMouse}
                            onMouseOut = {handleMouseOut}
                            
                />
            </div>

        );
    }



export default Toggle;