import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListnumber'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='h-screen p-10 bg-[#1c1c1c] text-white'>
      
        <Header data={data}/>
        <TaskListNumber data={data}/>
        <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard