import React from "react";
import './Dev.css'

const dev =props=>{
    return(
        <div className="errorBody">
            <div className="errorAction">
                <header>
                    <h1>Who made this stupid thing?</h1>
                </header>
                <p className="errorMessage">The dev of this useless this is Jobayer Rahman</p>
                <footer>
                    <button className="errorButton" onClick={props.closeDev}>I get it</button>
                </footer>
            </div>
        </div>
    )
}

export default dev;