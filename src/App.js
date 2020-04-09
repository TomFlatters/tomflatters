import React, { Component } from 'react';
import './App.css';

import { Route, BrowserRouter as Router} from 'react-router-dom';

import Contact from './Contact'
import Home from './Home'
import Experience from './Experience'
import Projects from './Projects'
import Header from './Header'
import Learning from './Learning'

class App extends Component {  
  

  render() {
    return (

    <Router>

     <div>
     <Header />
        <div className="background" id="home_bg">
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/learning" component={Learning} />
        </div>
     </div>

    </Router>

    );
  }
} 

export default App;