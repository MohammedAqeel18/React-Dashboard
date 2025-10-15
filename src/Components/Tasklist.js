import { useState } from "react";

function TaskList(){
    const [task,setTask]= useState([
    {
        id:1,
        name:" Learn React Basics"
    },
    {
        id:2,
        name:"Style React With Tailwind"
    },
    {
        id:3,
        name:"Building a Interactive React Application"
    }
]);;

return(
    <div className="p-6">
    <h1 className=" mb-2 text-2xl font-bold text-blue-600"> 📝 Task List</h1>    
    <ul className="space-y-2">
    {task.map((task)=> (
    <li key={task.id} className=" p-4 bg-gray-200 shadow-md hover:bg-blue-200 transition"> 
    {task.name}
    </li>    
    ))}    
    </ul>
    </div>
)
}

export default TaskList;