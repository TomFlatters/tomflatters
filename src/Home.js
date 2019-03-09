import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import { IoLogoLinkedin, IoLogoGithub, IoMdDocument, IoIosCode } from 'react-icons/io'

class Home extends Component {

  render() {
    if (window.location.href){
      console.log(window.location.href.substr(window.location.href.lastIndexOf('/')));
      var urlCheck = window.location.href.substr(window.location.href.lastIndexOf('/'));
  }
    return (
<div>

      <div className="main home">
        <div className="typewriter">
          Tom Flatters
      </div>
        <div className="rowflex">
           <Link check={urlCheck} to="/sites"><li className="ls">Projects<IoIosCode size="2em" className="linkedin"/></li></Link>
           <a href="https://www.linkedin.com/in/tom-flatters-a04521160/"><li className="ls"><IoLogoLinkedin size="2em" className="linkedin"/></li></a>
           <a href="https://github.com/TomFlatters"><li className="ls"><IoLogoGithub size="2em" className="linkedin"/></li></a>
           <li className="ls">CV<IoMdDocument size="2em" className="linkedin"/></li>
           
        </div> 
      </div>

      <div>
        
      </div>

</div>
    );
  }
}

export default Home;

