import * as React from "react"
import "./App.css"
import NavBar from "components/Navbar/Navbar"
import Login from "components/Login/Login"
import Landing from "components/Landing/Landing"
import Registration from "components/Registration/Registration"
import Activity from "components/Activity/Activity"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div className="app">
      <React.Fragment>{
        <BrowserRouter>
          <NavBar> </NavBar>
            <Routes>
              <Route path="/" element={<Landing />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Registration />}/>
              <Route path="/activity" element={<Activity />}/>
              
            </Routes>
        </BrowserRouter>
      }</React.Fragment>
     
    </div>
  )
}
