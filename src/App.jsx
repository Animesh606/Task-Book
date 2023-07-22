import { useState } from 'react';
import './App.css';
import Task from './Task';

const App = () => {
  const [newTask, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const updateValue = (event) => {
    setTask(event.target.value);
  }
  const addTask = () => {
    setTaskList((oldList) => [...oldList, newTask]);
    setTask('');
  }
  const deleteTask = (id) => {
    setTaskList((oldList) => oldList.filter((_, index) => index !== id));
  }
  return (
    <div className="App">
      <h1>Task Book</h1>
      <input placeholder="New Task" onChange={updateValue} value={newTask} />
      <button onClick={addTask}>+</button>
      <ul>
        {taskList.map((task, index) => {
          return <Task key={index} id={index} value={task} onClick={deleteTask} />
        })}
      </ul>
    </div>
  );
}

export default App;
