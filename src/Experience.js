import React, { Component } from 'react';
import './App.css';

import { IoIosArrowDropdown } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import ScrollIntoView from 'react-scroll-into-view'

import OxHelp from './OxHelp'
import InsideUni from './InsideUni';
import OxTranscribe from './OxTranscribe'
import Spill from './Spill'



class Experience extends Component{
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
                <h1 className="pagetitle">Experience<FaRegLightbulb size="1em" className="animateicon"/></h1>
                {/* <h4 className="nomargin" style={{opacity: opacity}} id="subheader">Web, Mobile, Simulation</h4> */}
                <ScrollIntoView selector="#projects">
                <div style={{opacity: opacity}} id="icon">
                <IoIosArrowDropdown size={"1.5em"} className="scroll-icon" style={{cursor: "pointer"}} />
                </div>
                </ScrollIntoView>

            </div>

            {/* Practical experiences */}
            {/* id=project is scroll button target */}
            <div>
                <div id="projects"> 
                    {/* OxHelp & PA */}
                    <OxHelp />
                </div> 
                <div> 
                    {/* InsideUni */}
                    <InsideUni />
                </div>    
                <div> 
                    {/* Spill */}
                    <Spill />
                </div> 
                <div> 
                    {/* JP Morgan */}
                </div>     
                <div> 
                    {/* OX1 */}
                </div>
                <div> 
                    {/* UNIQ and subject ambassador <=> Outreach */}
                </div>
                <div> 
                    {/* Add the rest here */}
                </div>  
                <div> 
                    {/* Hackathons */}
                    <OxTranscribe/>
                </div>                    
            </div>

            {/* Education Section */}
            <div>
                <div> 
                    {/* School & Uni */}
                </div> 
                <div> 
                    {/* Code certifications */}
                </div>    
                <div> 
                    {/* Add the rest here */}
                </div>           
            </div>

        </div>
        </div>
    )
}

}

export default Experience;