import React from 'react'
import { useState } from 'react';

 const createTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [date, setDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    
    const [newTask , setNewTask] = useState({})

    const submitHandler = (e) => {
        setNewTask({
            ...newTask,
            taskTitle,
            date,
            assignTo,
            category,
            description,
            active: false,
            completed: false,
            failed: false,
            newTask: true,
        })
        const data = JSON.parse(localStorage.getItem('employees'))
        data.forEach((elem) => {
            if(elem.firstName === assignTo){
                elem.tasks.push(task)
                console.log(elem)
            }
        });
        setTaskTitle('')
        setDate('')
        setAssignTo('')
        setCategory('')
        setDescription('')
        e.preventDefault();
        
    }
  return (
     <div className="mt-8 mx-8 p-8 rounded-2xl bg-[#1f2937] shadow-2xl">
            <form onSubmit = {(e)=>{submitHandler}}
             action="" className="grid grid-cols-2 gap-12">
                <div className='flex flex-col gap-5  ml-5 space-y-6 '>
                    <div className='rounded-md font-semibold '>
                <h3>Task Title</h3>
                <input 
                value = {taskTitle}
                onChange = {(e) => setTaskTitle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-gray-600 focus:border-blue-500 outline-none" type="text" placeholder='Make UI Design'/>
                </div>

            <div className=' font-semibold '> 
                <h3>Date</h3>
                
            <input
            value = {date}
             onChange = {(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-gray-600 focus:border-blue-500 outline-none" type="date" placeholder='Date'/>
            </div>

            <div className='rounded-md font-semibold '>
                <h3>Assign To</h3>

            <input
            value = {assignTo}
             onChange = {(e) => setAssignTo(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-gray-600 focus:border-blue-500 outline-none" type="text" placeholder='Employee Name' />
            </div>

            <div className='rounded-md font-semibold '>
                <h3>Categary</h3>
            <input 
            value = {category}
            onChange = {(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-gray-600 focus:border-blue-500 outline-none" type="text" placeholder='Design, Dev, etc..' />
            
            </div>
            </div>

                <div>
             <h3>Description</h3>
           <textarea 
           value = {description}
           onChange = {(e) => setDescription(e.target.value)}  
           className="w-full h-72 p-4 rounded-xl bg-[#111827] border border-gray-600 resize-none outline-none focus:border-blue-500"
            placeholder="Write task description..."
           ></textarea>

           <button className="mt-8 w-full self-end h-12 px-8 rounded-xl bg-blue-600 active:scale-95 hover:bg-blue-700  transition-all font-semibold text-white">
            Create Task
            </button>
           </div>

           
            
            
            </form>
        </div>
  )
}

export default createTask;