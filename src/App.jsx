import React, { useEffect,useState} from "react";
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/employeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './pages/utils/localStorage'
import { AuthContext } from "./context/AuthProvider";
import { useContext } from "react";





const App = () => {

  const authData = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  
  // useEffect(() => {
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  //   }, [authData])
    
  
  
   const handleLogin = (email, password) => {

  if (email === "admin@me.com" && password === "123") {
    setUser("admin");
     localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    
  } 
  else if (authData) {
    console.log(authData);
    const employees= authData.employees.find((e)=> email == e.email && password == e.password)
   if(employees){
    setloggedInUserData(employees)
    setUser("employee")
    localStorage.setItem(
        "loggedInUser",
        JSON.stringify({role:"employee"})
    )
}
  } 

  else {
    alert("Invalid Credentials");
  }
};


    
useEffect(() => {
    
    setLocalStorage();
    getLocalStorage();
  }, []);

  

return (
  <div>
    {!user ? (
      <Login handleLogin={handleLogin} />
    ) : user === "admin" ? (
      <AdminDashboard />
    ) : user === "employee" ? (
      <EmployeeDashboard data={loggedInUserData} />
    ) : null}
  </div>
);
}
export default App