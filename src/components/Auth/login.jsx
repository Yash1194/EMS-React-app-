import React from 'react'
import { useState } from 'react'

const login = ({handleLogin}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    handleLogin(email, password)
    e.preventDefault();
    console.log("email is" ,email);
    console.log("password is", password);
    setEmail("");
    setPassword("");
  }
  return (
    <div className="w-screen h-screen border-2 border-blue-400  rounded-lg  flex items-center justify-center">
        <div className='border-4 border-emerald-500 rounded-lg bg-emerald-500 '>
            <form 
            onSubmit={(e) =>{
              submitHandler(e);
           
            }
              }
            className='xl flex flex-col items-center justify-center p-18 bg-black rounded-2xl'>
              <input 
              value={email}
              onChange={(e)=>{
                
                setEmail(e.target.value)

              }}
              className='m-3 px-6 py-3 border-2 border-gray-400 rounded-2xl text-xl text-center  outline-none bg-transparent placeholder:text-gray-400 ' type="email" placeholder="Enter your email" />
              <input 
              value={password}
              onChange={(e)=>{
              
                setPassword(e.target.value)
              }}
              className='m-3 px-6 py-3 border-2 border-gray-400 rounded-2xl text-xl text-center outline-none bg-transparent placeholder:text-gray-400' type="password" placeholder="Enter your password" />
              <button className='m-3 px-8 py-3 bg-blue-500 text-white rounded-2xl' type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default login