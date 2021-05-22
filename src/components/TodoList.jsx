import React from 'react'

function TodoList(props) {

    const deleteItem = () => {
        props.deleteItem(props.id)
    }
    
    return (
        <div>
            <div className="todoList">
                <span>{props.newTask}</span>
                <button>edit</button>
                <button onClick={deleteItem}>delete</button>
            </div>
        </div>
    )
}

export default TodoList


