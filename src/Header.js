import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';

class Header extends Component{



render(){
    if (window.location.href){
        console.log(window.location.href.substr(window.location.href.lastIndexOf('/')));
        var urlCheck = window.location.href.substr(window.location.href.lastIndexOf('/'));
    }
    return(
        <div className="header">
           <div className="header-title">
           <Link 
           style={{ textDecoration: 'none',
           color: "black" }} 
           to="/">
           TF
           </Link></div>
           <LinkTo check={urlCheck} name="Home" link="/"/>
           <LinkTo check={urlCheck} name="Projects" link="/sites"/>
           <LinkTo check={urlCheck} name="Tutorials" link="/about"/>
           <LinkTo check={urlCheck} name="Contact" link="/contact"/>
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