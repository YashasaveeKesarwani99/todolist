import React,{ useState } from 'react';
import './App.css';
import Input from './Components/Input/Input';
import Cards from './Components/Cards/Cards';
import { task } from './utils'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [task,setTask] = useState<string>("");
  const [tasks,setTasks] = useState<Array<string>>([])

  console.log(tasks)

  return (
    <div className="App">
       <Input setTask={setTask} setTasks={setTasks} tasks={tasks} task={task}/>
       <Cards tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
