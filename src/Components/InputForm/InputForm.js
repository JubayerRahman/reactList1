import React ,{useState} from "react";
import './inputForm.css'

import ErrorAction from "../ErrorAction/ErrorAction";

const InputForm=props=>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');

    const nameChange = event=>{
        setName(event.target.value)
        console.log(name)
    }
    const ageChange = event=>{
        setAge(event.target.value)
        console.log(age)
    }

    const submithandeler =event =>{
        event.preventDefault();

        const EnteredData = {
            enterName : name,
            enterAge  : age
        }
        if(name.trim().length === 0 || age.trim().length===0){
            return (setError({
                title:"Invalid info",
                message:"Please enter all details required in the form."
            }))
        }
        if(age<0 || age>120){
                setName ('');
                setAge ('');
                return(
                    setError({
                        title:"Age problem!!",
                        message:"Please enter a valid human age. This form is not for jinns."
                    })
                )
            
        }
        props.formInfo(EnteredData);


        setName ('');
        setAge ('');
    }

    const closeError = ()=>{
        setError(null);
    }
    return(

        <div> 
            {error && <ErrorAction title={error.title} message={error.message} onClose={closeError}/>}
            <div className="NameForm">
                <form onSubmit={submithandeler}>
                <div >
                <label className="name" htmlFor="name">Name</label>
                <input onChange={nameChange} value={name}  id="name" type="text" placeholder="Enter Name" />
                </div>
                <div>
                <label htmlFor="age">Age</label>
                <input onChange={ageChange} value={age} id="age" type="number" placeholder="Enter age" />
                </div>
                <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default InputForm;