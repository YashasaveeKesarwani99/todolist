import React from 'react'
import { Card,Button } from 'react-bootstrap'
import './SingularCard.css'

type props = {
    index:number
    task:String
    setTasks:React.Dispatch<React.SetStateAction<string[]>>
    tasks:string[]
}

const SingularCard:React.FC<props> = ({index,task,setTasks,tasks}) =>{

    var date:Date = new Date()
    var render:String = date.toISOString().split('T')[0]

    const clickHandler:(e:React.MouseEvent<HTMLElement>)=>void=()=>{
        var arr:string[] = tasks
        setTasks(arr.filter((ele)=>ele!==task))
    }

    return(
        <div className='SingularCard'>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Title>{task} </Card.Title>
        <Card.Subtitle>{render}</Card.Subtitle>
        <Card.Text>
        Task #{index+1}
        </Card.Text>
        <Button variant="outline-success"
        onClick={clickHandler}
        >Done</Button>
        </Card.Body>
        </Card>
        </div>
    )
}

export default SingularCard;