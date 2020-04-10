import React, { Component } from 'react';
import './App.css';

import Algorithms from './Algorithms/algorithms'

import Snake from './Snake'
import CalcBanner from './CalcBanner'

import { IoIosArrowDropdown, IoIosCode } from "react-icons/io";
import ScrollIntoView from 'react-scroll-into-view'

class Projects extends Component{
    constructor(){
        super()
        this.state=({
            currentScrollHeight: 0
        })
    }

    componentDidMount () {      
        window.focus()
        window.onscroll =()=>{
            this.setState({currentScrollHeight: window.scrollY})
       }
     }

    render(){
        if(this.state.currentScrollHeight > 200){
            var opacity = 0;
        }
        else{
            var opacity = Math.min(8 / this.state.currentScrollHeight  , 1)
        }
    return(
        <div className="dark-background">
        <div className="project-scroll">

            <div className="project-text">
                <h1 className="pagetitle">Projects<IoIosCode size="2em" className="animateicon"/></h1>
                {/* <h4 className="nomargin" style={{opacity: opacity}} id="subheader">Web, Mobile, Simulation</h4> */}
                <ScrollIntoView selector="#projects">
                <div style={{opacity: opacity}} id="icon">
                <IoIosArrowDropdown size={"1.5em"} className="scroll-icon" style={{cursor: "pointer"}} />
                </div>
                </ScrollIntoView>

            </div>

            {/* first project is scroll target */}
            <div>

            <div id="projects"> 
                <CalcBanner />
            </div>    

{/* SNAKE */}
                <Snake />

{/* CALC */}


{/* SIMULATION */}

{/* ALGORITHMS */}
                <Algorithms/>
            </div>
            
        </div>
        </div>
    )
}

}

export default Projects;