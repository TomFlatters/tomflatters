import React, { Component } from 'react';
import './App.css';

import IndProj from './IndividualProject'

import { IoIosArrowDropdown, IoIosCode } from "react-icons/io";
import ScrollIntoView from 'react-scroll-into-view'


class Sites extends Component{

render(){

    return(
        <div className="main projects">
        <div className="project-scroll">

            <div className="project-text">
                <h1 className="pagetitle">Projects<IoIosCode size="2em" className="animateicon"/></h1>
                <h4  onscroll={() => document.getElementById('subheader').classList = "hide"} id="subheader" className="nomargin">Web, Mobile, Simulation</h4>
                <ScrollIntoView selector="#projects">
                <div onscroll={() => document.getElementById('icon').classList = "hide"} id="icon" >
                <IoIosArrowDropdown size={"1.5em"} className="scroll-icon" style={{cursor: "pointer"}} />
                </div>
                </ScrollIntoView>

            </div>

            <div>
            <div id="projects"><IndProj /></div>
            <IndProj />
            <IndProj />
            <IndProj />
            <IndProj />
            </div>
            
        </div>
        </div>
    )
}

}

export default Sites;