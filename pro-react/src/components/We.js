import React from "react";
import Slider1 from './Slider1';
import Pro from './Pro';
import pubsub from 'pubsub-js';

class We extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Slider1/>
                <Pro />
            </React.Fragment>
        )
    }
}

export default We;