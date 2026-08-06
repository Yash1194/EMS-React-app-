import React from 'react'

const Tasklist = () => {
  return (
    <div id='Tasklist' className=' h-[55%] overflow-x-auto w-full py-5  gap-5 ml-6 mt-6 flex items-center justify-items-start flex-nowrap '>
        <div className=' flex-shrink-0 h-full w-[25%] bg-yellow-400  border-r-2 border-pink-400  rounded-2xl px-5'>
            <div className='flex justify-between mt-10'>
                <h3 className='text-2xl font-semibold bg-red-600 px-2 py-1 rounded-sm text-center w-fit'>High</h3>
            <h4 className='text-lg font-bold mt-1'>4 Aug. 2026</h4>

            </div>
            <h2 className='mt-7 text-wrap font-bold font-sans text-m'>Solve 5 DSA questioin from Atoz sheet</h2>
            
        </div>
       
        
       

    </div>
  )
}

export default Tasklist