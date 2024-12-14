import React, { useCallback, useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState('')
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {

    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      console.log(userData);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  function handleLogin(email, password) {
    if (email == 'admin@menubar.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "admin" }))
    } else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employees", data: employee }))

      }
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : " "}
      {user === 'admin' ? <AdminDashboard  changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App
