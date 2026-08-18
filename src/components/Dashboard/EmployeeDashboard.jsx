import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListnumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <div className='h-screen p-10 bg-[#1c1c1c] text-white'>
      
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <Tasklist data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard