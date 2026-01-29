import { useState } from "react";
import Input from "./Input.jsx";

function AddTask ({onAddTask}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    console.log(title, description);

    return (
         <div className="p-6 bg-slate-700 rounded-md shadow mt-6 mb-6 flex flex-col">
            <Input type="text" 
            placeholder="Task title" 
            value={title} 
            onChange={(event) => setTitle(event.target.value)}/>

            <Input type="text"
            placeholder="Task description"
            value={description} 
            onChange={(event) => setDescription(event.target.value)}/>

            <button onClick={() => {
                if (!title.trim() || !description.trim()) 
                    return alert("Please fill in all fields");
            onAddTask(title, description); 
            setTitle(''); 
            setDescription('');}}
            className="bg-blue-500 
            hover:bg-blue-700 
            text-white font-bold 
            py-2 
            px-4 
            rounded-md
            mx-auto">
                Add Task
            </button>
        </div>
    );
}

export default AddTask;