import "./Login.css"
import { Link, useNavigate } from "react-router-dom"

export default function Login(){
    return(
        <div className="Login">
            <div className="card">
                    <h2>Login </h2><br/>
                <div className="form">
                    <div className="input-field">
                        <label for="email">Email</label>
                        <input type="email" name="email" placeholder="user@gmail.com" value=""/>
                    </div>
                    <div className="input-field">
                        <label for="password">Password</label>
                        <input type="password" name="password" placeholder="password" value=""/>
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