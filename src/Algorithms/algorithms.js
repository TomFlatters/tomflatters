import React, { Component } from 'react';
import '../App.css';

import Sorting from './sorting.js'

class Algorithms extends Component{

render(){
    return(
        <div>
            <h1>Algorithms</h1>
            <p>Visualize some famous algorithms by selecting them below</p>

            {/* SORTING */}
            <Sorting />
        </div>
    )
}

}

export default Algorithms;