import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';

import { IoLogoLinkedin, IoLogoGithub, IoMdDocument, IoIosCode } from 'react-icons/io'

class Header extends Component{



render(){
    if (window.location.href){
        console.log(window.location.href.substr(window.location.href.lastIndexOf('/')));
        var urlCheck = window.location.href.substr(window.location.href.lastIndexOf('/'));
    }
    return(
        <div className="header">
            <div className="align-left">
           <div className="header-title">
           <Link 
           style={{ textDecoration: 'none',
           color: "white",
           fontWeight: 600,
           background: "black",
           borderRadius: "5%",
           padding: "0.5vh 0.5vw"
           }} 
           to="/">
           TF
           </Link></div>
           <LinkTo check={urlCheck} name="Home" link="/"/>
           <LinkTo check={urlCheck} name="Projects" link="/sites"/>
           <LinkTo check={urlCheck} name="Tutorials" link="/about"/>
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