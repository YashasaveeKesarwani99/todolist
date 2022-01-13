import React,{ useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import './Input.css'

type props = {
    setTask:React.Dispatch<React.SetStateAction<string>>
    tasks:string[] 
    setTasks:React.Dispatch<React.SetStateAction<string[]>>
    task:string
}


const Input:React.FC<props> = ({setTask,tasks,setTasks,task}) =>{

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTask(e.target.value)
    }

    const clickHandler:(e:React.MouseEvent<HTMLElement>)=>void = (e:React.MouseEvent<HTMLElement>) =>{
        e.preventDefault()
        var arr:string[] = tasks;
        if(!arr.find((ele)=>ele===task))
            arr.push(task);
        setTasks(arr);
        setTask("")
    }

    return(
        <div className='Input'>
            <Form.Control
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={changeHandler}
            />
            <Button
            data-testid="button"
            onClick={(e:React.MouseEvent<HTMLElement>)=>clickHandler(e)}
            >Add</Button>
        </div>
    )
}

export default Input;