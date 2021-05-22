import React, {useState} from 'react';
import TaskForm from './components/TaskForm';
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
    </div>
  );
}

export default App;
