import React,{useState} from 'react'
import './todoapp.css'

function TodoApp(){
  const [task,setTask]=useState()
  const [taskList,setTaskList]=useState([])

  const handleText=(e)=>{
    setTask(e.target.value)
  }

  const handleAdd=()=>{
    const taskDetails={
      id:Math.floor(Math.random()*100),
      value:task,
      isCompleted:false
    }
    setTaskList([...taskList,taskDetails])
  }

  const handleDelete=(e,id)=>{
    console.log('id',id)
    e.preventDefault()
    setTaskList(taskList.filter((t)=>t.id!=id))
  }


  const hanldeComplete=(e,id)=>{
    e.preventDefault()
    const element=taskList.findIndex((t)=>t.id==id)
   const newTaskList=[...taskList]

     newTaskList[element]={
      ...newTaskList[element],
       isCompleted:true
    }
    console.log('taksDetails',newTaskList)
    setTaskList(newTaskList
      )
  }
 
  return(
    <div className="todo">
      <input type="text" name="text" id="text" onChange={(e)=>handleText(e)}/>
      <button className="add-btn" onClick={()=>handleAdd()}>Add</button>
      <br/>
      {taskList !=[] ? (
        <ul>
           {taskList.map((t)=>(
           	<li className={t.isCompleted ? "crossText" : "listitem"}>
               {t.value}
               <button className="delete" onClick={(e)=>handleDelete(e,t.id)}>Delete</button>
               <button className="completed" onClick={(e)=>hanldeComplete(e,t.id)}>Completed</button>
             </li>
           ))}
        </ul>
      ):null}
	

    </div>
  )
}

export default TodoApp