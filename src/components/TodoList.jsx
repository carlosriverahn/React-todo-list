import React from 'react'

function TodoList(props) {
    
    return (
        <div>
            <div className="todoList">
                <span>{props.newTask}</span>
                <span>edit</span>
                <span>delete</span>
            </div>
        </div>
    )
}

export default TodoList


