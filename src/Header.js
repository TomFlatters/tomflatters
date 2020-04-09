import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';

import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
import { MdMenu } from 'react-icons/md'

class Header extends Component{

    constructor(){
        super()
        this.state = ({
            mobMenuOpen: false
        })
    }

toggleMenu = () => {
    console.log("mob menu toggle")
    if (!this.state.mobMenuOpen){
        document.getElementById("menu").classList = "mob-menu-open"
    }
    else {
        document.getElementById("menu").classList = "mob-menu-closed"
    }
    this.setState({
        mobMenuOpen: !this.state.mobMenuOpen
    })
}


render(){
    if (window.location.href){
        var urlCheck = window.location.href.substr(window.location.href.lastIndexOf('/'));
    }
    return(
        <div>
        <div className="header">
        {/* regular nav */}
           <div className="align-left">
           <div className="header-title">
           <Link 
           style={{ 
           textDecoration: 'none',
           color: "white",
           fontWeight: 600,
           background: "black",
           padding: "0.5vh 0.5vw"
           }} 
           to="/">
           TF
           </Link></div>
           
           <LinkTo check={urlCheck} name="Home" link="/"/>
           <LinkTo check={urlCheck} name="Experience" link="/experience"/>
           <LinkTo check={urlCheck} name="Projects" link="/projects"/>
           <LinkTo check={urlCheck} name="Learning" link="/learning"/>
           <LinkTo check={urlCheck} name="Contact" link="/contact"/>
           </div>

           <div className="align-right">
            <a href="https://www.linkedin.com/in/tom-flatters-a04521160/">
                <div className="header-div">
                    <IoLogoLinkedin size="2.5em" className="linkedin"/>
                </div>
            </a>
            <a href="https://github.com/TomFlatters">
                <div className="header-div">
                    <IoLogoGithub size="2.5em" className="linkedin"/>
                </div>
            </a>
            </div>
        
        {/* mobile nav */}
        <div className="mob-header-title">
           <Link 
           style={{ 
           textDecoration: 'none',
           color: "white",
           background: "black",
           fontWeight: 600,
           padding: "1vw 1vw"
           }} 
           to="/">
           TF
           </Link>
        </div>
        <div className="mob-menu">
            <MdMenu size="2em" onClick={() => this.toggleMenu()} className="hamburger"/>
        </div>
        <div id="menu" className="mob-menu-closed">
        <Link to="/">
        <div className="mob-menu-item">Home</div>
        </Link>
        <Link to="/experience">
        <div className="mob-menu-item">Experience</div>
        </Link>
        <Link to="/projects">
        <div className="mob-menu-item">Projects</div>
        </Link>
        <Link to="/learning">
        <div className="mob-menu-item">Learning</div>
        </Link>
        <div className="mob-menu-item mob-menu-icons">
        <div>
            <a href="https://github.com/TomFlatters">
                <div className="header-div">
                    <IoLogoGithub size="2em" className="linkedin"/>
                </div>
            </a>
        </div>
        <div><a href="https://www.linkedin.com/in/tom-flatters-a04521160/">
                <div className="header-div">
                    <IoLogoLinkedin size="2em" className="linkedin"/>
                </div>
            </a>
        </div>
        </div>
     </div>
        
        </div>
        
     </div>
    )
}

}

export default Header;

const LinkTo = (props) => {
    return(

        <Link style={{ textDecoration: 'none',
        color: "black" }} 
        to={props.link}
       >

        <div className="header-div">
        {props.check === props.link ? 
            (<div id="selected-header">
                {props.name}
             </div>) 
             : 
             (<div>
                {props.name}
              </div>)
        }
        
        </div>

        </Link>
    )
}