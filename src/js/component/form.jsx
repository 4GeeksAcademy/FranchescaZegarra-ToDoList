import React, {useState} from "react";
import {v4 as uuidv4 } from "uuid";

function Form(props) {
    const [input, setInput] = useState("");

    const inputValue = e => {
        setInput(e.target.value);
    };

    const sentForm = e => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            text: input
        };
        props.onSubmit(newTask);
    };

    return(
        <> 
            <form className="row" action="" onSubmit={sentForm}>
                <input 
                    className="form-control border-0 rounded-0 col" 
                    type="text" 
                    placeholder="What needs to be done?" 
                    aria-label="readonly input example" 
                    readonly
                    onChange={inputValue}
                />
                <button  
                    type= "button" 
                    className="btn btn-success col-2" 
                    onClick={sentForm}>
                        Agregar
                </button>
            </form>
        </>
    )
}

export default Form;