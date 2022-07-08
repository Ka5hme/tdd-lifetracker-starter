import React from "react"
import {Link, useNavigate} from "react-router-dom"
import apiClient from "../../services/apiClient"
import {useState, useEffect} from "react"
import Login from "../Login/Login"
import "./AccessForbidden.css"

export default function AccessForbidden({user,setUser,}){
    // const navigate = useNavigate();
    // const [errors, setErrors] = useState({})
    // const[form, setForm]=useState({
    //     email:"",
    //     password:"",
    // })


    // const handleOnSubmit = async () => {
    //     setErrors
    // }
    return(
        <div className="AccessForbidden">
            <span className="error">You must be logged in to access that page</span>
            <Login user={user} setUser={setUser}/>
        </div>
    )
}