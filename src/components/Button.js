import './stylecomponents.scss'

//Hook only component

function Button({icon, handleClick}){
    
    return (

            <div className='button'>
                    <img alt=''  src='./resources/fondo.png' onClick={handleClick}/>
                    {icon}
                    
             </div>

        );
    }



export default Button;