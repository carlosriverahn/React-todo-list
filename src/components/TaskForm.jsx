import React, {useState} from 'react'

function TaskForm(props) {
    const [inputText, setInputText] = useState("");
    const [validation, setValidation] = useState(true)

    const handleform = (event) => {
        setInputText(event.target.value);
    }
 
    const Submit = (event)=>{
        event.preventDefault();
        if(inputText.trim() !== ""){
            props.newTask(inputText);
            setInputText("");
            setValidation(true);
        }else{
            setValidation(false);
        }
    }
    
    return (
        <div>
            <form onSubmit={Submit} className="form form-control" action="">
                <input value={inputText} 
                        onChange={handleform}
                        placeholder="New Task"
                />
                <button className="m-2 btn btn-button btn-dark" data-testid="add" >Add Task</button>
                {
                    !validation &&
                    <div className="validation text-danger"><span>Please enter a task</span></div>
                }
            </form>

        </div>
    )
}

export default TaskForm

