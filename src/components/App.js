
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {


  const [tasks,setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks,e.target.children[0].value]);
    e.target.children[0].value = '';
  }

  const deleteTask= (e)=>{
    e.preventDefault();
    // setTasks(tasks.filter((task)=>{
    //   return task!==e.target.parentNode.parentNode.children[0].value;
    // }))
    console.log(e.target.parentNode)
    e.target.parentNode.remove()
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>To-Do List</p>
        <form onSubmit={(e)=>addTask(e)}>
          <input type="text"  />
          <button type="submit" >Add ToDo</button>
        </form>
        <ul type="none">
            {
              tasks && tasks.map((task,index)=>(
                  <li key={index}>{task} <button onClick={(e)=>deleteTask(e)}>Delete</button></li>
              ))
            }
        </ul>
    </div>
  )
}

export default App
