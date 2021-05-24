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
                    <span className="h4 m-5">{props.newTask}</span>
                    <button className="btn btn-primary btn-sm m-2" onClick={editModeDom}>edit</button>
                    <button className="btn btn-danger btn-sm m-2" onClick={deleteItem}>delete</button>
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


