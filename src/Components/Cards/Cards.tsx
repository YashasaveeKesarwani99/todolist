import React from 'react'
import { task } from '../../utils'
import SingularCard from '../Card/SingularCard'
import './Cards.css'

type props = {
    tasks:string[]
    setTasks:React.Dispatch<React.SetStateAction<string[]>>
}

const Cards:React.FC<props> = ({tasks,setTasks}) =>{

    return(
        <div className='Cards'>
        {tasks.map((task:string,idx:number)=>{
            return(
                <SingularCard index={idx} task={task} setTasks={setTasks} tasks={tasks}/>
            )
        })}
        
        </div>
    )
}

export default Cards;