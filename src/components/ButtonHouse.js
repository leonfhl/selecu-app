import React, { Component, } from 'react';
import './stylecomponents.scss'

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
    }

    //CLICK on house button
    handleClick = prop => {
        //alert("nueva alerta "+this.props.src)
    
        this.props.onIdChange(this.props.src);

    }

    //mouse hovering
    handleMouse = prop => {
        //alert("nueva alerta "+prop)

        this.setState({
            mouseover: !this.state.mouseover,
        });
    }


    render() {

        const index = this.props.src;
        return (

            <div>
                <img    src={srcarray[index]} 
                        onClick={this.handleClick} 
                        onMouseOver={this.props.handleMouse}
                />
            </div>

        );
    }
}


export default ButtonHouse;