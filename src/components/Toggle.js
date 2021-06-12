import './stylecomponents.scss'

//Hook only component


function Toggle ({onToggle}) {

    
        return (

            <div className="toggle">
                <img alt=''  src='./resources/toggle.png' onClick={onToggle}/>
            </div>

        );
    }



export default Toggle;