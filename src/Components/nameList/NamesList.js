import React from "react";
import NameItem from "./NameItem/NameItem";
import './NameList.css'

const NamesList =props=>{

    if(props.items.length === 0){
        console.log("No Nems entered yet")
        return<h1 className="nameList">No Names entered yet</h1>
    }
    console.log(props.items)
    return(
        <div className="nameList">
            {/* <NameItem name={props.items.enterName} age={props.items.enterAge}/> */}
            {props.items.map((data)=>(
            <NameItem
            key ={Math.random()*100}
            name ={data.enterName}
            age ={data.enterAge}
            />
            ))}
            
        </div>
    )
}

export default NamesList;