import React, { Component } from 'react';
import './App.css';

import IndProj from './IndividualProject'

class Sites extends Component{

render(){
    return(
        <div className="main projects">
            
            <div className="project-text">
                <h1>Projects</h1>
                <h3>Click the image to view more</h3>
            </div>
            
            <div className="project-scroll">
            <IndProj />
            <IndProj />
            <IndProj />
            <IndProj />
            <IndProj />
            </div>
        </div>
    )
}

}

export default Sites;