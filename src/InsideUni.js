import React, { Component } from 'react';
import './App.css';
import insideuni from './InsideUni.png'


class InsideUni extends Component{

render(){
    return(
        <div className="indproj blue">
            <img className="indproj-image" src={insideuni} alt="InsideUni Homepage" />
            <div className="indproj-text">
                <h1 className="indproj-title">InsideUni</h1>
                <p className="indproj-desc">
                    Student project to make Oxbridge admissions more accessible. We've had 20,000 users to the site with over 1500 student contributors.
                </p>
                <br />
                <span className="indproj-tags">
                    python, django, js, html, css, postgresql
                </span>
            </div>
        </div>
    )
}

}

export default InsideUni;