import React from 'react'

const Header = () => {
  return (
    <div className=' '>
        <div className='flex items-center justify-between p-5 bg-gray-300 rounded-xl h-fit  '>
            <p className='text-2xl font-semibold '> Hello <br /> <span className='text-white text-center font-serif font-bold text-4xl '>Yash 👋</span> </p>
            <button className='bg-red-500 px-3 py-2 rounded-xl text-xl text-white'>Logout</button>
        </div>

    </div>
  )
}

export default Header