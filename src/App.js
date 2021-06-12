import './App.scss';

import ButtonHouse from './components/ButtonHouse.js'
import Ribbon from './components/Ribbon.js'
import { useState } from 'react';


function App() {
  //state for managin what house is clicked  
  const [id, setId] = useState(0);

  return (
    <div className="App">
      <div className="container-fluid homepage-bgimage">

        <div class="grid-container">
          <div class="grid-item"><ButtonHouse src={1} id={id} onIdChange = {setId}/></div>
          <div class="grid-item"><ButtonHouse src={2} id={id} onIdChange = {setId}/></div>
          <div class="grid-item"><ButtonHouse src={3} id={id} onIdChange = {setId}/></div>
          
        </div>
        <Ribbon show={id} onIdChange = {setId}/>
      </div>
    </div>
  );
}

export default App;
