import React, { Component, } from 'react';
import './stylecomponents.scss'


//Class only component

const srcarray= {
    1: "./resources/1.png",
    2: './resources/4.png',
    3: './resources/11.png'
}

class ButtonHouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: '',
            mouseover: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        
    }

    //CLICK on house button
    handleClick = prop => {
        //alert("nueva alerta "+this.props.src)
    
        this.props.onIdChange(this.props.src);

    }

    //light element on mouse over and then reset
    handleMouse = () => {
        //alert("nueva alerta "+prop)
        this.props.setMouse(true);
        
        this.setState({
            mouseover: true,
        });
    }

    handleMouseOut = () => {
        //alert("nueva alerta "+prop)
        this.props.setMouse(false);


        this.setState({
            mouseover: false,
        });
    }


    render() {

        const index = this.props.src;
        const brightness = this.state.mouseover === false? 1 : 1.4;
        return (

            <div>
                <img alt='' style ={{filter: 'brightness('+brightness+')'}}    
                        src={srcarray[index]} 
                        onClick={this.handleClick} 
                        onMouseOver={this.handleMouse}
                        onMouseOut = {this.handleMouseOut}
                />
            </div>

        );
    }
}


export default ButtonHouse;