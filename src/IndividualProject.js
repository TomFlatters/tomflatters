import React, { Component } from 'react';
import './App.css';
import oxhelp from './oxhelp.jpg'

class IndProj extends Component{

render(){
    return(
        <div className="indproj">
            <img className="indproj-image" src={oxhelp} alt="Image of OxbridgeHelp Homepage" />
            <div className="indproj-text">
            <h1 className="indproj-title">OxbridgeHelp</h1>
            <p className="indproj-desc">
                React web app that uses personal experiences of the Oxbridge application process to advise prospective students.
            </p>
            <br/>
            <span className="indproj-tags">
                tags:
                react, js, html, css, databases
            </span>
            </div>
        </div>
    )
}

}

export default IndProj;