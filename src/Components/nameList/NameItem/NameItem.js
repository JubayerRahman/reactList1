import React from "react";
import './NameItem.css'

const NameItem =props=>{
    return(
        <div className="nameItem">
            <h1 className="name">Name: {props.name}</h1>
            <h1 className="age">Age: {props.age}</h1>
        </div>
    )
}

export default NameItem;