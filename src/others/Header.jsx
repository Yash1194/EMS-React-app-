import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Header = (props) => {
  const { theme, toggleTheme } = useTheme();

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser")
    props.changeUser('')
  }
  
  const name = props.data ? props.data.firstName : 'Admin';

  return (
    <div className='w-full mb-6'>
      <div className='flex items-center justify-between p-6 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl'>
        <div>
          <span className='text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-0.5'>Welcome back</span>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2'>
            Hello, <span className='text-indigo-400'>{name}</span> 👋
          </h1>
        </div>
        <div className='flex items-center gap-3'>
          <button
            onClick={toggleTheme}
            className='bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs px-4 py-2.5 rounded-xl border border-slate-700/80 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer flex items-center gap-2'
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
          </button>
          <button 
            onClick={logOutUser} 
            className='bg-rose-600/90 hover:bg-rose-500 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-rose-950/30 transition-all duration-200 active:scale-95 cursor-pointer border border-rose-500/20'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header