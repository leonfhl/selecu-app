import React, { Component, } from 'react';
import './stylecomponents.scss'
import Button from './Button.js'
import Toggle from './Toggle.js'
import { BiBeer, BiCloudLightRain, BiGhost, BiUndo } from 'react-icons/bi';




class Ribbon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggled : 0,
        }
    }

    render() {

        //alert(this.props.show);

        return (

            <div class='ribbondiv'>

                <Toggle isToggled={this.state.isToggled} onToggle ={ ()=>{this.setState(!this.state.isToggled)}}/>
                <div class="bottom">

                        {(() => {
                            switch (this.props.show) {
                                case 1: return ( <div class="array "><Button icon={<BiUndo />} /> <Button icon={<BiGhost />} /></div>)
                                case 2: return ( <div class="array "><Button icon={<BiUndo />} /> <Button icon={<BiGhost />} /> <Button icon={<BiCloudLightRain />} /></div>)
                                case 3: return ( <div class="array "><Button icon={<BiUndo />} /> <Button icon={<BiGhost />} /> <Button icon={<BiCloudLightRain />} /> <Button icon={<BiBeer />} /></div>)
                                case 0: return ( <div class="arraybg "><Button icon={<BiUndo />} /> <Button icon={<BiGhost />} /></div>)
                            }

                        })()}

                    <img src='./resources/panel-vacio.png' />
                </div>


            </div>

        );
    }
}


export default Ribbon;