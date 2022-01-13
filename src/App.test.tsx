import { useState } from 'react'
import { render,fireEvent, screen } from '@testing-library/react'
import Input from './Components/Input/Input'
import Cards from './Components/Cards/Cards'


describe("testing app component",()=>{

    var setTask:React.Dispatch<React.SetStateAction<string>>
    var setTasks:React.Dispatch<React.SetStateAction<string[]>>
    var task:string
    var tasks:string[]=[]

    test('Inpur Element to render',()=>{
        render(<Input setTask={setTask} setTasks={setTasks} tasks={tasks} task={task}/>)
    })

    test('Card component to render',()=>{
        render(<Cards tasks={tasks} setTasks={setTasks}/>)
    })

})