import React, {useState} from 'react'

function TaskForm(props) {
    const [inputText, setInputText] = useState("");

    const handleform = (event) => {
        setInputText(event.target.value);
        console.log(inputText);
    }

    const Submit = (event)=>{
        event.preventDefault();
        props.newTask(inputText);
    }
    
    return (
        <div>
            <form onSubmit={Submit} className="form" action="">
                <span>Add task</span>
                <input value={inputText} onChange={handleform}/>
                <button>ADD</button>
            </form>

        </div>
    )
}

export default TaskForm

