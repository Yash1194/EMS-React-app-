import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/createTask'
import AllTasks from '../../others/AllTasks'


const AdminDashboard = () => {
  return (
    <div className="w-full p-10 h-screen" >
        
        <Header />
       <CreateTask/>
       <AllTasks/>

    
        



    </div>
  )
}

export default AdminDashboard