import React from 'react'

const Newtask = () => {
  return (
        <div className=' flex-shrink-0 h-full w-[25%] bg-pink-400  border-r-2 border-pink-400  rounded-2xl px-5'>
            <div className='flex justify-between mt-10'>
                <h3 className='text-2xl font-semibold bg-red-600 px-2 py-1 rounded-sm text-center w-fit'>High</h3>
            <h4 className='text-lg font-bold mt-1'>4 Aug. 2026</h4>

            </div>
            <h2 className='mt-7 text-wrap font-bold font-sans text-m'>Solve 5 DSA questioin from Atoz sheet</h2>
            
            <div className='flex justify-between mt-10'>
                <button className='bg-green-400 px-2 py-1 rounded-sm text-center w-fit'>Accept Task</button>
            </div>
        </div>
  )
}

export default Newtask