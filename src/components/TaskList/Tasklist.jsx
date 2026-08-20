import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import Newtask from './Newtask'
import CompleteTask from './completeTask'
import FailedTask from './FailedTask'
import { AuthContext } from '../../context/AuthProvider'

const Tasklist = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const handleTaskStatusChange = (taskIndex, actionType) => {
    if (!userData || !data) return;

    const updatedData = userData.map((emp) => {
      if (emp.email === data.email || emp.firstName === data.firstName) {
        const updatedTasks = emp.tasks.map((task, idx) => {
          if (idx === taskIndex) {
            if (actionType === 'accept') {
              return { ...task, newTask: false, active: true, completed: false, failed: false };
            }
            if (actionType === 'complete') {
              return { ...task, newTask: false, active: false, completed: true, failed: false };
            }
            if (actionType === 'fail') {
              return { ...task, newTask: false, active: false, completed: false, failed: true };
            }
          }
          return task;
        });

        const newTaskCount = updatedTasks.filter((t) => t.newTask).length;
        const activeCount = updatedTasks.filter((t) => t.active).length;
        const completedCount = updatedTasks.filter((t) => t.completed).length;
        const failedCount = updatedTasks.filter((t) => t.failed).length;

        return {
          ...emp,
          tasks: updatedTasks,
          taskStats: {
            newTask: newTaskCount,
            active: activeCount,
            completed: completedCount,
            failed: failedCount,
          },
        };
      }
      return emp;
    });

    setUserData(updatedData);
  };

  return (
    <div className="w-full my-4">
      <h2 className="text-lg font-extrabold text-white tracking-tight mb-3 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block"></span>
        Your Assigned Tasks
      </h2>
      <div id='Tasklist' className='overflow-x-auto w-full py-2 pb-6 gap-5 flex items-center justify-start flex-nowrap'>
        {data?.tasks?.map((elem, idx) => {
          if (elem.newTask) {
            return <Newtask key={idx} data={elem} onAccept={() => handleTaskStatusChange(idx, 'accept')} />
          }
          if (elem.active) {
            return <AcceptTask key={idx} data={elem} onComplete={() => handleTaskStatusChange(idx, 'complete')} onFail={() => handleTaskStatusChange(idx, 'fail')} />
          }
          if (elem.completed) {
            return <CompleteTask key={idx} data={elem} />
          }
          if (elem.failed) {
            return <FailedTask key={idx} data={elem} />
          }
          return null;
        })}
      </div>
    </div>
  )
}

export default Tasklist