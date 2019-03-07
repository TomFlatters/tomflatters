import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
<div>

      <div className="main home">
        <div className="typewriter">
          Tom Flatters
      </div>
        <div className="rowflex">
           <div className="item">Projects</div>
           <div className="item">GitHub</div>
           <div className="item">LinkedIn</div>
           <div className="item">CV</div>
        </div> 
      </div>

      <div>
        
      </div>

</div>
    );
  }
}

export default Home;

