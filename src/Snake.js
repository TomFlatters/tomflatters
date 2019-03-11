import React, { Component } from 'react';
import './App.css';
import oxhelp from './oxhelp.jpg'

class Snake extends Component{

render(){
    return(
        <div className="snake ">
            <div className="indproj-text-snake">
            <h1 className="indproj-title">PyGame Snake</h1>
            <p className="indproj-desc-snake">
                A simple Snake application using PyGame for Python.
            </p>
            <br/>
            <span className="indproj-tags">
                tags:
                python, pygame
            </span>
            </div>
        </div>
    )
}

}

export default Snake;