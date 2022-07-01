import React from "react"
import {Link, useNavigate} from "react-router-dom"
import apiClient from "../../services/apiClient"
import {useState, useEffect} from "react"
import Login from "../Login/Login"

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
            <h1>You must be logged in to access this page!</h1>
            <Login user={user} setUser={setUser}/>
        </div>
    )
}