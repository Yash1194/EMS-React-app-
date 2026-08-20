import React, { useEffect, useState } from "react";
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './pages/utils/localStorage'
import { AuthContext } from "./context/AuthProvider";
import { useContext } from "react";





const App = () => {

  const [userData,setUserData] = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        if (userData) {
          setUser(userData.role)
          setLoggedInUserData(userData.data)
        }
      } catch (error) {
        console.error("Invalid JSON in localStorage for loggedInUser, clearing it.", error);
        localStorage.removeItem("loggedInUser");
      }
    }
  }, [])



const handleLogin = (email, password) => {
  if (email === "admin@me.com" && password === "123") {
    setUser("admin");

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "admin" })
    );
  } else {
    const employee = userData?.find(
      (e) => email === e.email && password === e.password
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employee,
        })
      );
    } else {
      alert("Invalid Credentials");
    }
  }
};



  // useEffect(() => {

  //   setLocalStorage();
  //   getLocalStorage();
  // }, []);



  const currentUser = userData?.find(
    (e) => (loggedInUserData?.email && e.email === loggedInUserData.email) || (loggedInUserData?.firstName && e.firstName === loggedInUserData.firstName)
  ) || loggedInUserData;

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser}/>
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={currentUser} />
      ) : null}
    </div>
  );
}
export default App