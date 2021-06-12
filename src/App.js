import background from './resources/fondo.jpg';
import './App.scss';

import ButtonHouse from './components/ButtonHouse.js'
import Ribbon from './components/Ribbon.js'


function App() {
  return (
    <div className="App">
      <div className="container-fluid homepage-bgimage">

        <div class="grid-container">
          <div class="grid-item"><ButtonHouse src='./resources/1.png' /></div>
          <div class="grid-item"><ButtonHouse src='./resources/4.png' /></div>
          <div class="grid-item"><ButtonHouse src='./resources/11.png' /></div>
          
        </div>
        <Ribbon />
      </div>
    </div>
  );
}

export default App;
