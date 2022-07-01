import "./Registration.css"
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import apiClient from "../../services/apiClient"

export default function Register({setUser, user}) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
      first_name: "",
      last_name: "",
      email: "",
      date: "",
      password: "",
      passwordConfirm: "",
      location: "Local Clinic",
      agreeToTerms: false,
    })
  
    const handleOnInputChange = (event) => {
      if (event.target.name === "password") {
        if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
          setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
        } else {
          setErrors((e) => ({ ...e, passwordConfirm: null }))
        }
      }
      if (event.target.name === "passwordConfirm") {
        if (form.password && form.password !== event.target.value) {
          setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
        } else {
          setErrors((e) => ({ ...e, passwordConfirm: null }))
        }
      }
      if (event.target.name === "email") {
        if (event.target.value.indexOf("@") === -1) {
          setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
        } else {
          setErrors((e) => ({ ...e, email: null }))
        }
      }
  
      setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }
  
    const handleOnSubmit = async () => {
      //setIsLoading(true)
      setErrors((e) => ({ ...e, form: null }))
  
      if (form.passwordConfirm !== form.password) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
        console.log(errors)
        //setIsLoading(false)
        return
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }

      const { data, error } = await apiClient.signupUser({
        email: form.email,
        first_name: form.first_name,
        last_name: form.last_name,
        password: form.password,
        username: form.username,
      })

      if (data?.user) {
        setUser(data.user);
        apiClient.setToken(data.token);
      }

      if (data) {
        //setUser(data.user)
        apiClient.setToken(data.token)
      }
      if (error) {
        setErrors((e) => ({ ...e, form: error }))
      }
      
      //setIsLoading(false)
    }

    useEffect(() => {
        if (user?.email) {
            navigate("/activity")
        }
    }, [user,navigate])

    //   try {
    //     const res = await axios.post("http://localhost:3001/auth/register", {
    //       username: form.username,
    //       first_name: form.first_name,
    //       last_name: form.last_name,
    //       email: form.email,
    //       password: form.password,
    //     })
  
    //     if (res?.data?.user) {
    //       //setAppState(res.data)
    //       setIsLoading(false)
    //       navigate("/activity")
    //     } else {
    //       setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
    //       setIsLoading(false)
    //     }
    //   } catch (err) {
    //     console.log(err)
    //     const message = err?.response?.data?.error?.message
    //     setErrors((e) => ({ ...e, form: message ? String(message) : String(err) }))
    //     setIsLoading(false)
    //   }
    // }

    return(
    <div className="Register">
        <div className="card">
            <h2>Register</h2><br/>
            {(errors.form) && <span className="error">{errors.form}</span>}
        <br />

            <div className="form">
                <div className="input-field">
                    <label >Email</label>
                    <input type="email" name="email" placeholder="Enter a valid email" value={form.email} onChange={handleOnInputChange}/>
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="input-field">
                    <label >Username</label>
                    <input type="text" name="username" placeholder="your_username" value={form.username} onChange={handleOnInputChange}/>
                    {errors.username && <span className="error">{errors.username}</span>}
                </div>
                <div className="split-input-field">
                    <div className="input-field">
                        <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleOnInputChange}/>
                        {errors.first_name && <span className="error">{errors.first_name}</span>}
                    </div>
                    <div className="input-field">
                        <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleOnInputChange}/>
                        {errors.last_name && <span className="error">{errors.last_name}</span>}
                    </div>
                </div>
                <div className="input-field">
                    <label >Password</label>
                    <input type="password" name="password" placeholder="Enter password" value={form.password} onChange={handleOnInputChange}/>
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="input-field">
                    <label >Confirm Password</label>
                    <input type="password" name="passwordConfirm" placeholder="Confirm password" value={form.passwordConfirm} onChange={handleOnInputChange}/>
                    {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
                </div>

                <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>{isLoading ? "Loading..." : "Create Account"}</button>

            </div>
            <div className="footer">
                <p>Already have an account? Login  <a href="/login">here</a>
                </p>
            </div>    
        </div>
    </div>
    )
}