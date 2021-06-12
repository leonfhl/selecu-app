import './App.scss';

import ButtonHouse from './components/ButtonHouse.js'
import Ribbon from './components/Ribbon.js'
import { useState } from 'react';

import useSound from 'use-sound';
import turnSfx from './resources/sfx/turnon.mp3';


function App() {
  //state for managing what house is clicked  
  const [id, setId] = useState(0);

  //state for manage what button is clicked
  const [buttonReq, setButton] = useState(
    {
      buttonPressed: 0,
      urlPhoto : ''
    }
  );
  
  //alert(buttonPressed)


  return (
    <div className="App">
      <div className="container-fluid homepage-bgimage">

        <Dashboard scenario = {buttonReq} setId = {setId}/>

        <Ribbon show={id} setScenario = {setButton} setId = {setId}/>
      </div>
    </div>
  );
}

function Dashboard({scenario, setId}){

  //state for managing what house is lighted  
  const [isMouseOver, setMouse] = useState(false);
  
  //console.log(pathUnsplash(scenario))
  const [play] = useSound(turnSfx, { volume: 0.25 });
  if (isMouseOver) play();

  if(scenario.buttonPressed===0)
    return(
      <div className="grid-container">
          <div className="grid-item"><ButtonHouse src={1}  onIdChange = {setId} setMouse = {setMouse}/></div>
          <div className="grid-item"><ButtonHouse src={2}  onIdChange = {setId} setMouse = {setMouse}/></div>
          <div className="grid-item"><ButtonHouse src={3}  onIdChange = {setId} setMouse = {setMouse}/></div>
      </div>
    )
  else
      {
        //set promise of a photo
        //pathUnsplash(scenario, setUrl);
      return(
        <div className="grid-container">
          <div className="grid-item"></div>
          <div className="grid-item"><img alt=''  src={scenario.urlPhoto}/></div>
          <div className="grid-item"></div>
      </div>
      )
      }

}


export default App;
