import React, { Component,  } from 'react';
import './stylecomponents.scss'
class ButtonHouse extends Component {
    render() {
        return (

                <div>
                     <img src = {this.props.src}/>      
                </div>
                
        );
    }
}


export default ButtonHouse;