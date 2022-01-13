import React from 'react'
import { render,screen,fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './Input'

const mockSetTask = jest.fn()

describe('Testing Input Component',()=>{

    var setTasks:React.Dispatch<React.SetStateAction<string[]>>
    var task:string
    var tasks:string[] = []

    it('Input area is present',()=>{
        render(<Input  setTask={mockSetTask} setTasks={setTasks} tasks={tasks} task={task}/>)
        const ele = screen.getByPlaceholderText("Enter Task")

        expect(ele).toBeInTheDocument()
    })


    it('gets input from input component',  ()=>{
        render(<Input  setTask={mockSetTask} setTasks={setTasks} tasks={tasks} task={task}/>)
        const ele = screen.getByPlaceholderText("Enter Task") as HTMLInputElement

        fireEvent.change(ele,{target:{value:'Go To Gym'}})
        expect(ele.value).toBe('Go To Gym')
    })

    it('input element gets cleared when button clicked',  ()=>{
        render(<Input  setTask={mockSetTask} setTasks={mockSetTask} tasks={tasks} task={task}/>)
        const ele = screen.getByPlaceholderText("Enter Task") as HTMLInputElement
        const but = screen.getByTestId("button")

        fireEvent.change(ele,{target:{value:'Go To Gym'}})
        fireEvent.click(but)
        fireEvent.change(ele,{target:{value:''}})
        expect(ele.value).toBe('')
    })


})