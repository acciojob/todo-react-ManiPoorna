
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
    e.target.parentNode.parentNode.remove()
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>To-Do List</p>
        <form onSubmit={(e)=>addTask(e)}>
          <input type="text"  />
          <button type="submit" >Add ToDo</button>
        </form>
        {
          tasks && tasks.map((task,index)=>(
            <table>
              <tr key={index}>
                <td>{task}</td>
                <td><button onClick={(e)=>deleteTask(e)}>Delete</button></td>
              </tr>
            </table>
          ))
        }
    </div>
  )
}

export default App
