import React, { Component } from 'react';
import './App.css';
import oxhelp from './oxhelp.jpg'

class OxHelp extends Component{

render(){
    return(
        <div className="indproj blue">
            <img className="indproj-image" src={oxhelp} alt="OxbridgeHelp Homepage" />
            <div className="indproj-text">
            <h1 className="indproj-title">OxbridgeHelp x Project Access</h1>
            <p className="indproj-desc">
                Web app that uses personal experiences of the Oxbridge application process to advise prospective students.
                This project was merged into InsideUni in 2019.
            </p>
            <br/>
            <span className="indproj-tags">
                react, js, html, css, firebase
            </span>
            </div>
        </div>
    )
}

}

export default OxHelp;