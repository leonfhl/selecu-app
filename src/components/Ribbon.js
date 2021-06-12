import React, { Component, } from 'react';
import './stylecomponents.scss'
import Button from './Button.js'
import Toggle from './Toggle.js'
import { BiBeer, BiCloudLightRain, BiGhost, BiUndo } from 'react-icons/bi';


class Ribbon extends Component {
    render() {
        return (

            <div class='ribbondiv'>

                <Toggle/>
                <div class="bottom">
                    <div class ="array ">
                        <Button icon={<BiUndo/>}/>
                        <Button icon={<BiGhost/>}/>
                        <Button icon={<BiCloudLightRain/>}/>
                        <Button icon={<BiBeer/>}/>
                    </div>
                    <img src='./resources/panel-vacio.png' />
                </div>


            </div>

        );
    }
}


export default Ribbon;