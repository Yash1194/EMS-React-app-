import React from 'react'
import Header from '../../others/Header'
import TaskListNumber from '../../others/TaskListnumber'
import Tasklist from '../TaskList/Tasklist'

const employeeDashboard = ({data}) => {
  return (
    <div className='h-screen p-10 bg-[#1c1c1c] text-white'>
      <h1>{data.id}</h1>
        <Header/>
        <TaskListNumber/>
        <Tasklist/>
    </div>
  )
}

export default employeeDashboard