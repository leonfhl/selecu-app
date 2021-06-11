import background from './resources/fondo.jpg';
import './App.scss';

import ButtonHouse from './components/ButtonHouse.js'

function App() {
  return (
    <div className="App">
      <div className="container-fluid homepage-bgimage">
        
        <ButtonHouse src = './resources/1.png' />
        <ButtonHouse src = './resources/4.png' />
        <ButtonHouse src = './resources/11.png' />
        
      </div>
    </div>
  );
}

export default App;
