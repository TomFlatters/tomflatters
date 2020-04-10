import React, { Component } from 'react';
import './App.css';
import jpmorgan from './jpimg.svg'

class JPMorgan extends Component{

render(){
    return(
        <div className="indproj light-blue">
            <img className="indproj-image jpmorgan-img" src={jpmorgan} alt="JPMorgan" />
            <div className="indproj-text">
            <h1 className="indproj-title">J.P.Morgan</h1>
            <p className="indproj-desc">
                I attended the Technology Spring Week for JPMorgan in 2019. As well as discovering how a large coorporation organises its
                technology, I was exposed to new technologies and practiced both Python and Java during the week. 
            </p>
            <p className="indproj-desc">
                In the Summer of 2020, I will be attending a Software Engineering Internship at J.P.Morgan.
            </p>
            <br/>
            <span className="indproj-tags">
                python, java, agile methodologies
            </span>
            </div>
        </div>
    )
}

}

export default JPMorgan;