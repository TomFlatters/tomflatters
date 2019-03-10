import React, { Component } from 'react';
import './App.css';

import IndProj from './IndividualProject'
import OxHelp from './OxHelp'

import { IoIosArrowDropdown, IoIosCode } from "react-icons/io";
import ScrollIntoView from 'react-scroll-into-view'

import $ from "jquery";

class Sites extends Component{
    render(){
    return(
        <div className="main projects">
        <div className="project-scroll">

            <div className="project-text">
                <h1 className="pagetitle">Projects<IoIosCode size="2em" className="animateicon"/></h1>
                <h4 className={"nomargin"} id="subheader">Web, Mobile, Simulation</h4>
                <ScrollIntoView selector="#projects">
                <div id="icon">
                <IoIosArrowDropdown size={"1.5em"} className="scroll-icon" style={{cursor: "pointer"}} />
                </div>
                </ScrollIntoView>

            </div>

            {/* first project is scroll target */}
            <div>

            <div id="projects"> 
                <OxHelp />
            </div>    
{/* OXTRANSCRIBE - a hackathon experiment that provides live lecture transcription with */}
{/* SLASH BERLIN */}
{/* SIMULATION */}
{/* MY APP */}
            </div>
            
        </div>
        </div>
    )
}

}

export default Sites;