import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListnumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <div className='min-h-screen p-6 sm:p-10 bg-[#0b0f17] text-white flex flex-col'>
      <div className="max-w-7xl mx-auto w-full">
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <Tasklist data={props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard