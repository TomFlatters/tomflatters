import React, { Component } from 'react';
import './App.css';

class Learning extends Component{

render(){
    return(
        <div className="main dark-background offset-navbar">
            <div className="full-width-row">
                <div className="column">
                    <h1 className="pageheader">To Do</h1>
                    <div className="column-item">
                        <h3>SICP</h3>
                        <h5>From MIT</h5>
                        <p><i>Lectures, reading and exercises</i></p>
                        <s>
                        <ul>
                            <li>Chapter 1.1</li>
                            <li>Chapter 1.2</li>
                            <li>Chapter 1.3</li>
                            <li>Chapter 1.4</li>
                        </ul>
                        <ul>
                            <li>Chapter 2.1</li>
                            <li>Chapter 2.2</li>
                            <li>Chapter 2.3</li>
                            <li>Chapter 2.4</li>
                        </ul>
                        </s>
                        <br/>
                        <ul>
                            <li>Chapter 3.1</li>
                            <li>Chapter 3.2</li>
                            <li>Chapter 3.3</li>
                            <li>Chapter 3.4</li>
                        </ul>
                    </div>
                    <div className="column-item">
                        <h3>Greedy Algorithms, MSTs, and Dynamic Programming</h3>
                        <h5>From Stanford University</h5>
                        <ul>
                            <li>Week 1 Exercises</li>
                            <li>Week 2 Lectures & Exercises</li>
                            <li>Week 3 Lectures & Exercises</li>
                            <li>Weel 4 Lectures & Exercises</li>
                        </ul>
                    </div>                    
                    <div className="column-item">
                        <h3>"Become A Database Developer" Learning Path</h3>
                        <h5>By LinkedInLearning</h5>
                        <ul>
                            <li>SQL Essential Training</li>
                            <li>MySQL Essential Training</li>
                            <li>Learning SQL Programming</li>
                        </ul>
                    </div>
                    <div className="column-item">
                        <h3>Shortest Paths Revisited, NP-Complete Problems and What To Do About Them</h3>
                        <h5>From Stanford University</h5>
                        <ul>
                            <li>Week 1 Lectures & Exercises</li>
                            <li>Week 2 Lectures & Exercises</li>
                            <li>Week 3 Lectures & Exercises</li>
                            <li>Weel 4 Lectures & Exercises</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="column">
                    <h1 className="pageheader">Recently Completed</h1>
                    <div className="column-item">
                        <h3>SICP</h3>
                        <h5>From MIT</h5>
                        <ul>
                            <li>Chapter 3.1</li>
                            <li>Chapter 3.2</li>
                            <li>Chapter 3.3</li>
                            <li>Chapter 3.4</li>
                        </ul>
                    </div>
                    <div className="column-item">
                        <h3>Greedy Algorithms, MSTs, and Dynamic Programming</h3>
                        <h5>From Stanford University</h5>
                        <ul>
                            <li>Week 1 Exercises</li>
                            <li>Week 2 Lectures & Exercises</li>
                            <li>Week 3 Lectures & Exercises</li>
                            <li>Weel 4 Lectures & Exercises</li>
                        </ul>
                    </div>                    
                    <div className="column-item">
                        <h3>"Become A Database Developer" Learning Path</h3>
                        <h5>By LinkedInLearning</h5>
                        <ul>
                            <li>SQL Essential Training</li>
                            <li>MySQL Essential Training</li>
                            <li>Learning SQL Programming</li>
                        </ul>
                    </div>
                    <div className="column-item">
                        <h3>Shortest Paths Revisited, NP-Complete Problems and What To Do About Them</h3>
                        <h5>From Stanford University</h5>
                        <ul>
                            <li>Week 1 Lectures & Exercises</li>
                            <li>Week 2 Lectures & Exercises</li>
                            <li>Week 3 Lectures & Exercises</li>
                            <li>Weel 4 Lectures & Exercises</li>
                        </ul>
                    </div>
                    </div> */}
            </div>
        </div>
    )
}

}

export default Learning;