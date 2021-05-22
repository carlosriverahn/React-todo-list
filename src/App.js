import React, {useState} from 'react';
import TaskForm from './components/TaskForm';
import TodoList  from './components/TodoList'
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);

  const newTask = (task) => {
      setTodoList([task, ...todoList])
  }

  const deleteItem = (id) => {
    // debugger
    const todoListFilter = todoList.filter((e, index) => index !== id);
    setTodoList(todoListFilter);
  }

  const updateItem = (id, task) => {
    const todoListUpdate = todoList.map((elm, index) => {
      if(index === id){
        elm = task;
      }
      return elm;
    });
    setTodoList(todoListUpdate);
  }
  
    
  return (
    <div className="App">
  
      <TaskForm  newTask = {newTask}/>
  
      <div className="todoList">
      {
        todoList.map((e, index) => <TodoList key={index}
                                               newTask={e}
                                               deleteItem={deleteItem}
                                               id={index}
                                               edit={updateItem}
          />
        )
      } 
      </div>  

    </div>
  );
}

export default App;
