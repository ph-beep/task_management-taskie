import { useEffect } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTasks";
import { useState as userState } from "react";

function App () {
  const [tasks, setTasks] = userState(JSON.parse(localStorage.getItem('tasks')) || []);

useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  function onAddTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
   <div className="w-full h-full bg-slate-950 flex justify-center p-6">
     <div className="w-[500px]">
      <h1 className=" text-5xl text-slate-100 font-black text-center">Taskie</h1>
      <AddTask onAddTask={onAddTask}/>
      <Tasks tasks={tasks} 
      onTaskClick={onTaskClick} 
      onDeleteTask={onDeleteTask} />
     </div>
   </div>
  );
}

export default App;