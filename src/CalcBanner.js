import React, { Component } from 'react';
import './App.css';
import Calc from './Calc'

class CalcBanner extends Component{

render(){
    return(
        <div className="indproj-calc blue">
            <div className="calc-padding">
            <Calc />
            </div>            

            <div className="indproj-text-calc">
                        <h1 className="indproj-title">
                            React Calculator
                        </h1>
                        <p className="indproj-desc">
                            This Javascript calculator was made for a FreeCodeCamp project as part of the front end libraries certification.
                        </p>
                        <br/>
                        <span className="indproj-tags">
                            tags:
                            react, js, html, css
                        </span>
                </div>
        </div>
    )
}

}

export default CalcBanner;

