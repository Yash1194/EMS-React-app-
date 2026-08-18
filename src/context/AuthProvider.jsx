import React, { createContext, useContext, useState,useEffect } from 'react'
import { getLocalStorage } from '../pages/utils/localStorage';
import { setLocalStorage } from '../pages/utils/localStorage';
// localStorage.clear()

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
const [userData, setUserData] = useState(null)
useEffect(() => {
setLocalStorage();
     const { employees, admin } = getLocalStorage();

setUserData({
    employees,
    admin
});
},[])


  return (
    <div>
        <AuthContext.Provider value={userData}>
    {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider