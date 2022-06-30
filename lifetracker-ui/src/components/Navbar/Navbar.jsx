import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../Assets/codepath.70a9a31f.svg"

export default function NavBar(){
    return(
        <nav className="Navbar">
            <div className="content">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="codepath logo"/></Link>
                </div>
                <ul className="links">
                    <Link to="/activity"><li>Activity</li></Link>
                    <Link to="/exercise"><li>Exercise</li></Link>
                    <Link to="/nutrition"><li>Nutrition</li></Link>
                    <Link to="/sleep"><li>Sleep</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/register"><li className="btn-secondary">Sign Up</li></Link>
                </ul>
            </div> 
        </nav> 
    )
}