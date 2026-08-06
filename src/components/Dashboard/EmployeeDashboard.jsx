import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListnumber'
import Tasklist from '../TaskList/Tasklist'

const employeeDashboard = () => {
  return (
    <div className='h-screen p-10 bg-[#1c1c1c] text-white'>
        <Header/>
        <TaskListNumber/>
        <Tasklist/>
    </div>
  )
}

export default employeeDashboard