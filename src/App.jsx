import React, { useEffect,useState} from "react";
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/employeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './pages/utils/localStorage'


const App = () => {
       const handleLogin = (email,password,username) => {
        if(email = 'admin@me.com' && password =='123'){
          setUser('admin');
          console.log(user)
        }else if(username == 'user@me.com' && password == '123'){
          setUser('user');
          console.log(user);
        }else{
          alert("Invalid Credentials")
        }
     }
useEffect(() => {
    
    setLocalStorage();
    getLocalStorage();
  }, []);

  const [user, setUser] = useState(null)
  return (
    <div>
     {!user ?  <Login handleLogin={handleLogin} /> : ''}
     {user == 'admin@me.com' ? <AdminDashboard/> : <EmployeeDashboard/>}
     


    </div>
  )
}

export default App