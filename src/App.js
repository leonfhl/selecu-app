import './App.scss';

import ButtonHouse from './components/ButtonHouse.js'
import Ribbon from './components/Ribbon.js'
import { useState } from 'react';


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

  //console.log(pathUnsplash(scenario))

  if(scenario.buttonPressed===0)
    return(
      <div className="grid-container">
          <div className="grid-item"><ButtonHouse src={1}  onIdChange = {setId}/></div>
          <div className="grid-item"><ButtonHouse src={2}  onIdChange = {setId}/></div>
          <div className="grid-item"><ButtonHouse src={3}  onIdChange = {setId}/></div>
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
