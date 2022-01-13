import React from 'react'
import { render,screen,fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './Input'

describe('Testing Input Component',()=>{

    var setTask:React.Dispatch<React.SetStateAction<string>>
    var setTasks:React.Dispatch<React.SetStateAction<string[]>>
    var task:string = ""
    var tasks:string[]=[]

    it('Input area is present',()=>{
        render(<Input  setTask={setTask} setTasks={setTasks} tasks={tasks} task={task}/>)
        const ele = screen.getByPlaceholderText("Enter Task")

        expect(ele).toBeInTheDocument()
    })

})