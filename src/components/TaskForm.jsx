import React, {useState} from 'react'

function TaskForm(props) {
    const [inputText, setInputText] = useState("");
    const [validation, setValidation] = useState(true)

    const handleform = (event) => {
        setInputText(event.target.value);
        console.log(inputText);
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
            <form onSubmit={Submit} className="form" action="">
                <span>Add task</span>
                <input value={inputText} onChange={handleform}/>
                <button>ADD</button>
                {
                    !validation &&
                    <div className="validation"><span>Test</span></div>
                }
            </form>

        </div>
    )
}

export default TaskForm

