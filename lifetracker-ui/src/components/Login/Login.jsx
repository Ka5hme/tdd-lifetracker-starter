import "./Login.css"
import { Link, useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
      email: "",
      password: "",
    })

    const handleOnInputChange = (event) => {
        if (event.target.name === "email") {
          if (event.target.value.indexOf("@") === -1) {
            setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
          } else {
            setErrors((e) => ({ ...e, email: null }))
          }
        }
    
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }
    
    return(
        <div className="Login">
            <div className="card">
                    <h2>Login </h2><br/>
                <div className="form">
                    <div className="input-field">
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="user@gmail.com" value={form.email} onChange={handleOnInputChange}/>
                    </div>
                    <div className="input-field">
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="password" value={form.password} onChange={handleOnInputChange}/>
                    </div>

                    <button className="btn">Login</button>
                </div>
                <div className="footer">
                    <p>Don't have an account? Sign up</p>
                    <a href="/register"></a>
                </div>
            </div>
        </div>
    )
}