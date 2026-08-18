import React from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/createTask'
import AllTasks from '../../others/AllTasks'


const AdminDashboard = (props) => {
  return (
    <div className="w-full p-10 h-screen" >
        
        <Header changeUser={props.changeUser}/>
       <CreateTask/>
       <AllTasks/>

    
        



    </div>
  )
}

export default AdminDashboard