import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import {AuthContext} from '../context/AuthProvider';

 const CreateTask = () => {

const [userData, setUserData] = useContext(AuthContext);
    
    const [taskTitle, setTaskTitle] = useState("");
    const [date, setDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    
    const [newTask , setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle.trim() || !date || !assignTo.trim() || !category.trim() || !description.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newTaskObj = {
      taskTitle,
      taskName: taskTitle,
      date,
      taskDate: date,
      assignTo,
      category,
      description,
      taskDescription: description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    let assigned = false;
    const updatedData = userData.map((elem) => {
      if (assignTo.trim().toLowerCase() === elem.firstName.trim().toLowerCase()) {
        assigned = true;
        const newTasks = [...(elem.tasks || []), newTaskObj];
        const currentStats = elem.taskStats || { active: 0, newTask: 0, completed: 0, failed: 0 };
        return {
          ...elem,
          tasks: newTasks,
          taskStats: {
            ...currentStats,
            newTask: (currentStats.newTask || 0) + 1,
          },
        };
      }
      return elem;
    });

    if (!assigned) {
      alert(`Employee "${assignTo}" not found. Available employees: ${userData.map(e => e.firstName).join(", ")}`);
      return;
    }

    setUserData(updatedData);

    setTaskTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };
  return (
    <div className="my-6 p-8 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-xl">
      <h2 className="text-xl font-extrabold text-white tracking-tight mb-6 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
        Create New Task
      </h2>
      <form onSubmit={submitHandler} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">Task Title</label>
            <input 
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-slate-700/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder:text-slate-500 outline-none transition-all"
              type="text" 
              placeholder="e.g. Make UI Design"
            />
          </div>

          <div> 
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">Date</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-slate-700/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder:text-slate-500 outline-none transition-all"
              type="date"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-slate-700/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder:text-slate-500 outline-none transition-all"
              type="text" 
              placeholder="e.g. Rahul, Priya, Aman" 
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">Category</label>
            <input 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#0b0f17] border border-slate-700/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder:text-slate-500 outline-none transition-all"
              type="text" 
              placeholder="Design, Dev, Integration..." 
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col flex-1 mb-4">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}  
              className="w-full flex-1 min-h-[160px] p-4 rounded-xl bg-[#0b0f17] border border-slate-700/60 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder:text-slate-500 resize-none outline-none transition-all"
              placeholder="Write detailed task description..."
            ></textarea>
          </div>

          <button className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 font-semibold text-white shadow-lg shadow-blue-950/40 cursor-pointer">
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask;