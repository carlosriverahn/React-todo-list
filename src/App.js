import React, {useState} from 'react';
import TaskForm from './components/TaskForm';
import TodoList  from './components/TodoList'
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([]);

  const newTask = (task) => {
      setTodoList([task, ...todoList])
  }

  console.log(todoList);
  
  return (
    <div className="App">
      <TaskForm  newTask = {newTask}/>
      {
        todoList.map(elm => <TodoList newTask={elm}/>)
      }
    </div>
  );
}

export default App;
