import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks ({tasks, onTaskClick, onDeleteTask}) {
    const navigate = useNavigate();

    function handleTaskClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/tasks?${query.toString()}`);
    };
    return (
        <ul className= "space-y-4 p-6 bg-slate-700 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="bg-slate-800 p-4 rounded-md flex gap-2 items-center justify-between">
                    <button onClick={() => onTaskClick(task.id)} 
                    className={`text-xl text-left text-slate-100 w-full font-bold p-2 rounded-md 
                    ${task.completed && "line-through text-slate-400"}`}>
                        {task.title}
                    </button>
                    <button onClick={() => handleTaskClick(task)} className="text-slate-300 p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => onDeleteTask(task.id)} 
                    className="text-slate-300 p-2 rounded-md">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;