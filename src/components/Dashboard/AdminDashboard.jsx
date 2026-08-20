import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTasks from '../../others/AllTasks'


const AdminDashboard = (props) => {
  return (
    <div className="w-full min-h-screen p-6 sm:p-10 bg-[#0b0f17] text-white">
      <div className="max-w-7xl mx-auto">
        <Header changeUser={props.changeUser}/>
        <CreateTask/>
        <AllTasks/>
      </div>
    </div>
  )
}

export default AdminDashboard