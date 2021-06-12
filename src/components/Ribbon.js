import React, { Component, } from 'react';
import './stylecomponents.scss'
import Button from './Button.js'
import Toggle from './Toggle.js'
import { BiBeer, BiCloudLightRain, BiGhost, BiUndo } from 'react-icons/bi';


//Class + functions component

//function to hide changing style
function offsetToggle(isToggled){

        if (isToggled==0)
            return {bottom:"10px",};
        else
            return {bottom:"-140px",};

}

class Ribbon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggled : 0,
        }
    }


    render() {

        //alert(this.props.show);
        let divStyle="";
        if (this.state.isToggled==0)
            divStyle={bottom:"10px",};
        else
            divStyle={bottom:"-140px",};


        return (

            <div class='ribbondiv' style={offsetToggle(this.state.isToggled)}>

                <Toggle isToggled={this.state.isToggled} onToggle ={ ()=>{this.setState({isToggled:!this.state.isToggled})}}/>
                <div class="bottom">

                        {(() => {
                            switch (this.props.show) {
                                case 1: return ( <div class="array ">
                                                    <Button icon={<BiUndo />} handleClick={()=>this.props.handleClick(0)} /> 
                                                    <Button icon={<BiGhost/>} handleClick={()=>this.props.handleClick(1)} />
                                                </div>)
                                case 2: return ( <div class="array ">  
                                                    <Button icon={<BiUndo /> } handleClick={()=>this.props.handleClick(0)}/> 
                                                    <Button icon={<BiGhost />} handleClick={()=>this.props.handleClick(1)}/> 
                                                    <Button icon={<BiCloudLightRain />} handleClick={()=>this.props.handleClick(2)}/>
                                                </div>)
                                case 3: return ( <div class="array ">   
                                                    <Button icon={<BiUndo />} handleClick={()=>this.props.handleClick(0)}/> 
                                                    <Button icon={<BiGhost />} handleClick={()=>this.props.handleClick(1)}/> 
                                                    <Button icon={<BiCloudLightRain />} handleClick={()=>this.props.handleClick(2)}/> 
                                                    <Button icon={<BiBeer />} handleClick={()=>this.props.handleClick(3)}/>
                                                </div>)
                                case 0: return ( <div class="arraybg ">
                                                    <Button icon={<BiUndo />} />
                                                </div>)
                            }

                        })()}

                    <img src='./resources/panel-vacio.png' />
                </div>


            </div>

        );
    }
}


export default Ribbon;