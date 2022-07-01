import * as React from "react"
import "./App.css"
import NavBar from "components/Navbar/Navbar"
import Login from "components/Login/Login"
import Landing from "components/Landing/Landing"
import Registration from "components/Registration/Registration"
import Activity from "components/Activity/Activity"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import apiClient from "../../services/apiClient"


export default function App() {
  const[user, setUser] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiClient.fetchUserFromToken()
      if (data) {
        setUser(data.user)
      }
    }

    const token = localStorage.getItem("life_tracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])


  return (
    <div className="app">
      <React.Fragment>{
        <BrowserRouter>
          <NavBar user={user} setUser={setUser}>  </NavBar>
            <Routes>
              <Route path="/" element={<Landing user={user} setUser={setUser}/>}/>
              <Route path="/login" element={<Login user={user} setUser={setUser}/>}/>
              <Route path="/register" element={<Registration user={user} setUser={setUser}/>}/>
              <Route path="/activity" element={<Activity user={user} setUser={setUser} />}/>
              
            </Routes>
        </BrowserRouter>
      }</React.Fragment>
     
    </div>
  )
}
