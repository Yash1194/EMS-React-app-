import React, { createContext, useContext, useState,useEffect } from 'react'
import { getLocalStorage } from '../pages/utils/localStorage';
import { setLocalStorage } from '../pages/utils/localStorage';
// localStorage.clear()

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [userData, setUserData] = useState(null)
useEffect(() => {
  setLocalStorage();
  const { employees } = getLocalStorage();
  setUserData(employees);
},[])

useEffect(() => {
  if (userData) {
    localStorage.setItem("employees", JSON.stringify(userData));
  }
}, [userData]);


  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
    {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider