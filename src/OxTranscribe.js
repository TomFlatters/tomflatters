import React, { Component } from 'react';
import './App.css';
import oxhack  from './oxhack.png'

class OxTranscribe extends Component{

render(){
    return(
        <div className="indproj light-blue">
            <div className="indproj-text-right">
            <h1 className="indproj-title">OxHack 2018</h1>
            <p className="indproj-desc-right">
               Our team integrated a transcription service with a chat bot to allow students to ask questions about the lecture in real time.
            </p>
            <br/>
            <span className="indproj-tags">
                tags:
                react, js, html, css, firebase, apis (Amazon Lex)
            </span>
            </div>
            <img className="indproj-image" src={oxhack} alt="Image of Transcription web app" />
        </div>
    )
}

}

export default OxTranscribe;