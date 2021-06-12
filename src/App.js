import './App.scss';

import { createApi } from 'unsplash-js';

import ButtonHouse from './components/ButtonHouse.js'
import Ribbon from './components/Ribbon.js'
import { useState } from 'react';


function App() {
  //state for managing what house is clicked  
  const [id, setId] = useState(0);
  //state for manage what button is clicked
  const [buttonPressed, setButton] = useState(0);
  
  const [urlPhoto, setUrl] = useState('');
  //alert(buttonPressed)


  return (
    <div className="App">
      <div className="container-fluid homepage-bgimage">

        <Dashboard scenario = {buttonPressed} urlPhoto = {urlPhoto} setUrl ={setUrl}  setId = {setId}/>

        <Ribbon show={id} handleClick= {setButton}/>
      </div>
    </div>
  );
}

function Dashboard({scenario,urlPhoto, setUrl, setId}){

  //console.log(pathUnsplash(scenario))

  if(scenario==0)
    return(
      <div class="grid-container">
          <div class="grid-item"><ButtonHouse src={1}  onIdChange = {()=>setId(1)}/></div>
          <div class="grid-item"><ButtonHouse src={2}  onIdChange = {setId}/></div>
          <div class="grid-item"><ButtonHouse src={3}  onIdChange = {setId}/></div>
      </div>
    )
  else
      {
        //set promise of a photo
        pathUnsplash(scenario, setUrl);
      return(
        <div class="grid-container">
          <div class="grid-item"></div>
          <div class="grid-item"><img src={urlPhoto}/></div>
          <div class="grid-item"></div>
      </div>
      )
      }

}
//API to get images from Unsplash
const pathUnsplash = (scenario, setURL) =>{
 
  let photoURL='';

  const arrayScenarios = {
    1: "ghost",
    2: "storm",
    3: "beer"
  }
  
  //TODO hide on server
  const accessKey ='YSKE_r_OqHTWaoZXGYGHnChVg34Zq0cWTU5OJrJEoOQ';
  const privateKey = 'vsxEbZbE1ztYhUpYDS6g_CtJbXSKwaBXt-im7fPqyHo';

  //create session on unsplash
  const unsplash = createApi({
    accessKey: accessKey,
    // `fetch` options to be sent with every request
    headers: { 'X-Custom-Header': 'foo' },
  });

  //get a random photo
  return unsplash.photos.getRandom({
    query: arrayScenarios[scenario],
    count: 1,
    color: 'purple',
  }).then(result => {
    switch (result.type) {
      case 'error':
        console.log('error occurred: ', result.errors[0]);
      case 'success':
        //console.log(photoURL);
        //update state to re-render on async promise
        setURL(result.response[0].urls.small);
        
    }
  });
  

}

export default App;
