import React, {useState} from "react";
import './ErrorAction.css'
import Dev from "../Devname/Dev";

const ErrorAction = props=>{
    const [dev, setDev] = useState();
    const buttonText =()=>{
        setDev('Jobayer Rahman')
        console.log('Jobayer')
    }
    return(
        <div className="errorBody" onClick={props.onClose}>
            <div className="errorAction">
                <header>
                    <h1>{props.title}</h1>
                </header>
                <p className="errorMessage">{props.message}</p>
                <footer>
                    <button className="errorButton" onClick={props.onClose}>I get it</button>
                    <button className="errorButton" onClick={buttonText} >
                        <a className="devLink" href="https://sidemenuportfolio.netlify.app/" target="_blank">Dev??</a></button>
                </footer>
            </div>
        </div>
    )
}

export default ErrorAction;