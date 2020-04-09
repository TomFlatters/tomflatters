import React, { Component } from 'react';
import './App.css';
import spill from "./spill-logo-white.png"
import spillgoogle from "./spill-google.jpg"
import spilltranscribe from "./spill-transcribe.jpg"

class Spill extends Component{

render(){
    return(
        <div>

            <div className="indproj light-blue">
                <img className="indproj-image" src={spill} alt="Spill Logo" />
                <div className="indproj-text">
                <h1 className="indproj-title">Spill</h1>
                <p className="indproj-desc">
                    Spill is a startup that offers businesses counselling and therapy for their employees. 
                    The next two panels highlight two of the projects I've worked on with Spill over the past 2 years.
                </p>
                {/* <span className="indproj-tags">
                    python, algolia, firebase, react, html, css, js, 
                </span> */}
                </div>
            </div>

            <div className="indproj-vert blue">

                <div className="indproj-vert-panel">
                    <img className="indproj-image" src={spillgoogle} alt="Google for Counsellors" />
                    <div className="indproj-text-vert">
                        <h1 className="indproj-title">Google for Counsellors</h1>
                        <p className="indproj-desc">
                            A search engine for counselling to find messages suitable for their clients. 
                            The user can filter by tags, style and type of message. 
                            Counsellors can upload their own snippets and see how many times they've been used.
                        </p>
                        <br/>
                        <span className="indproj-tags">
                            react, js, html, css, firebase, algolia
                        </span>
                    </div>
                </div>

                <div className="indproj-vert-panel">
                    <img className="indproj-image" src={spilltranscribe} alt="Speech to Text" />
                    <div className="indproj-text-vert">
                        <h1 className="indproj-title">Speech to Text</h1>
                        <p className="indproj-desc">
                            I used APIs to record text and transcribe it to text, because some people find it easier to 
                            talk than to type, and that's why this tool exists.
                        </p>
                        <br/>
                        <span className="indproj-tags">
                            react, js, html, css, firebase, google apis, python, flask
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

}

export default Spill;