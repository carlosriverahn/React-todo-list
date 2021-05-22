import React, {useState} from 'react'

function TodoList(props) {

    const [editMode, setEditMode] = useState(false);
    const [editTex, setEditTex] = useState("");

    const editModeDom = () => {
        setEditMode(true);
    }

    const editTextInput = (event) => {
        setEditTex(event.target.value);
    }
    

    const deleteItem = () => {
        props.deleteItem(props.id);
    }

    const submitEdit = (event) => {
        event.preventDefault();
        props.edit(props.id, editTex);
        setEditTex("");
        setEditMode(false);
    }
    
    return (
        <div>
            {
                !editMode ?
                <div className="todoList">
                    <span>{props.newTask}</span>
                    <button onClick={editModeDom}>edit</button>
                    <button onClick={deleteItem}>delete</button>
                </div>
                :
                <form onSubmit={submitEdit} className="formEdit">
                    <input value={editTex} 
                            onChange={editTextInput} 
                            type="text" />
                    <button>Save</button>
                </form>
            }
        </div>
    )
}

export default TodoList


