import React, { Component, } from 'react';
import './stylecomponents.scss'


class Button extends Component {
    render() {
        return (

            <div class='button'>
                    <img src='./resources/fondo.png' />
                    {this.props.icon}
                    
             </div>

        );
    }
}


export default Button;