import React, {useState} from "react";

function AddTaskForm({onAddTask}){
   const [taskName,setTaskName] = useState("") 
   
   const handleSubmit = (e)=>{
    e.preventDefault(e);
    if(taskName.trim()==="") return "";

    onAddTask(taskName);
    setTaskName("");
   } 

   return(
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-6 bg-white shadow-md">
    <input
    type="text"
    placeholder="Enter New Task"
    value={taskName}
    onChange={(e)=>setTaskName(e.target.value)}
    className="flex-1 p-2 border p-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
    />         
    <button type="submit" className="bg-blue-600 text-white font-bold px-4 py-2 hover:bg-blue-700 transition"> 
   Add Task     
    </button>
    </form>
   )
}

export default AddTaskForm;