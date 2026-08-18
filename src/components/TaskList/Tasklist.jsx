  import React from 'react'
  import AcceptTask from './AcceptTask'
  import Newtask from './Newtask'
  import CompleteTask from './completeTask'
  import FailedTask from './FailedTask'
  const Tasklist = ({data}) => {
    return (
      <div id='Tasklist' className=' h-[55%] overflow-x-auto w-full py-5  gap-5 ml-6 mt-6 flex items-center justify-items-start flex-nowrap '>
        { data.tasks.map((elem,idx,) =>{
          if(elem.active){
            return <AcceptTask key={idx} data={elem}/>
          }
          if(elem.newTask){
            return <Newtask key={idx} data={elem}/>
          }
          if(elem.completed){
            return <CompleteTask key={idx} data={elem}/>
          }
          if(elem.failed){
            return <FailedTask key={idx} data={elem}/>
          }
        })
      }
            
          
        

      </div>
    )
  }

  export default Tasklist