import { useState } from "react";

export default function NewTask({addTask}) {
    
    const [enteredtask,setenteredTask]= useState('');

    function handleChange(event){
        setenteredTask(event.target.value);
    }

    function handleClick(){
        if(enteredtask.trim() === '') return;
        addTask(enteredtask);
        setenteredTask('');   
    }

  return (
    <div className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredtask}/>
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  );
}
