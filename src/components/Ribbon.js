import React, { Component, } from 'react';

import { createApi } from 'unsplash-js';

import './stylecomponents.scss'
import Button from './Button.js'
import Toggle from './Toggle.js'
import { BiBeer, BiCloudLightRain, BiGhost, BiUndo } from 'react-icons/bi';


//Class + functions component

//function to hide changing style
function offsetToggle(isToggled){

        if (isToggled===false)
            return {bottom:"10px",};
        else
            return {bottom:"-140px",};

}

//API to get images from Unsplash with a state from parent to update
const pathUnsplash = (scenario, setButton) =>{
 
    //exit in case the scenario is the one
    if (scenario===0)
    return;
  
    const arrayScenarios = {
      1: "ghost",
      2: "storm",
      3: "beer"
    }
    
    //TODO hide on server
    const accessKey ='YSKE_r_OqHTWaoZXGYGHnChVg34Zq0cWTU5OJrJEoOQ';
  
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
        default:
          console.log('error occurred: ', result.errors[0]);
          break;
        case 'success':
          console.log(result.response[0].urls.small);
          //update state to re-render on async promise
          setButton({
            buttonPressed: scenario,
            urlPhoto: result.response[0].urls.small,
          });
          break;
          
      }
    });
   
  }

class Ribbon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggled : 0,
        }
        
        this.wrapperRef = React.createRef();
        this.handleToggle= this.handleToggle.bind(this)
    }

    handleClick(scenario){

        //check if only have to update button state (houses case)
        if (scenario===0){
            this.props.setId(0);
            this.props.setScenario({
                buttonPressed:0,
            })
        }
        else
        //set promise to get URL and buttonpressed
        pathUnsplash(scenario, this.props.setScenario);
    }

    handleToggle(){

        //animate ribbon with css isnavopen
        //const wrapper = this.wrapperRef.current;
        //wrapper.classList.toggle('is-nav-open');
        //change state
        this.setState({isToggled:!this.state.isToggled,})
        //alert(this.state.isToggled)
    }


    render() {

        return (

            <div ref={this.wrapperRef} className='ribbondiv' style={offsetToggle(this.state.isToggled)} >

                <div className="toggle">
                    <img alt=''  src='./resources/toggle.png' onClick={this.handleToggle}/>
                </div>

                <div className="bottom">

                        {(() => {
                            switch (this.props.show) {
                                case 1: return ( <div className="array ">
                                                    <Button icon={<BiUndo />} handleClick={()=>this.handleClick(0)} /> 
                                                    <Button icon={<BiGhost/>} handleClick={()=>this.handleClick(1)} />
                                                </div>)
                                case 2: return ( <div className="array ">  
                                                    <Button icon={<BiUndo /> } handleClick={()=>this.handleClick(0)}/> 
                                                    <Button icon={<BiGhost />} handleClick={()=>this.handleClick(1)}/> 
                                                    <Button icon={<BiCloudLightRain />} handleClick={()=>this.handleClick(2)}/>
                                                </div>)
                                case 3: return ( <div className="array ">   
                                                    <Button icon={<BiUndo />} handleClick={()=>this.handleClick(0)}/> 
                                                    <Button icon={<BiGhost />} handleClick={()=>this.handleClick(1)}/> 
                                                    <Button icon={<BiCloudLightRain />} handleClick={()=>this.handleClick(2)}/> 
                                                    <Button icon={<BiBeer />} handleClick={()=>this.handleClick(3)}/>
                                                </div>)
                                default: return ( <div className="arraybg ">
                                                    <Button icon={<BiUndo />} />
                                                </div>)
                            }

                        })()}

                    <img alt=''  src='./resources/panel-vacio.png' />
                </div>


            </div>

        );
    }
}


export default Ribbon;