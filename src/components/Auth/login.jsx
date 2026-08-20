import React, { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

const login = ({handleLogin}) => {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail("");
    setPassword("");
  }

  return (
    <div className="min-h-screen w-full bg-[#0b0f17] flex items-center justify-center p-4 relative">
      <div className='w-full max-w-md bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-blue-950/20 relative'>
        <button
          onClick={toggleTheme}
          className='absolute top-6 right-6 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700/80 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer'
          title="Toggle Light/Dark Theme"
        >
          {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black text-white tracking-tight">EMS Portal</h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Sign in to your account</p>
        </div>

        <form onSubmit={submitHandler} className='flex flex-col gap-5'>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">Email Address</label>
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-5 py-3.5 border border-slate-700/70 rounded-xl text-base text-white outline-none bg-[#070a10] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-slate-500 transition-all' 
              type="email" 
              placeholder="Enter your email" 
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">Password</label>
            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-5 py-3.5 border border-slate-700/70 rounded-xl text-base text-white outline-none bg-[#070a10] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:text-slate-500 transition-all' 
              type="password" 
              placeholder="Enter your password" 
              required
            />
          </div>

          <button 
            className='mt-2 w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-blue-950/40 cursor-pointer' 
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default login