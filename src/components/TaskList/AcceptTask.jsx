import React from 'react'

const AcceptTask = ({data}) => {
  return (
     <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400  border-r-2 border-pink-400  rounded-2xl px-5'>
            <div className='flex justify-between mt-10'>
                <h3 className='text-2xl font-semibold bg-red-600 px-2 py-1 rounded-sm text-center w-fit'>{data.category}</h3>
            <h4 className='text-lg font-bold mt-1'>{data.Date}</h4>

            </div>
            <h2 className='mt-7 text-wrap font-bold text-lg'>{data.taskName}</h2>
            <p className='mt-7 text-wrap font-bold text-sm'>{data.taskDescription}</p>
            
            <div className='flex justify-between mt-10'>
                <button className='bg-green-400 px-2 py-1 rounded-sm text-center w-fit'>Mark as Completed</button>
                <button className='bg-red-400 px-2 py-1 rounded-sm text-center w-fit'>Mark as Failed</button>

            </div>
            
            
        </div>
  )
}

export default AcceptTask