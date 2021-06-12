import React, { Component, } from 'react';
import './stylecomponents.scss'
import Button from './Button.js'

class Ribbon extends Component {
    render() {
        return (

            <div class='ribbondiv'>

                <div class="toggle"><img src='./resources/toggle.png' /></div>
                <div class="bottom">
                    <div class ="array ">
                    <Button icon=''/>
                    <Button icon=''/>
                    <Button icon=''/>
                    <Button icon=''/>
                    </div>
                    <img src='./resources/panel-vacio.png' />
                </div>


            </div>

        );
    }
}


export default Ribbon;