import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../Assets/codepath.70a9a31f.svg"
import apiClient from "../../services/apiClient"

export default function NavBar({user, setUser}){
    
    const handleLogout = async()=>{
        await apiClient.logoutUser()
        setUser({})
    }
    
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
                    {user?.email?(
                        <button onClick={handleLogout} className="btn-secondary">Sign Out</button>
                        ):(
                            <Link to="/register"><li className="btn-secondary">Sign Up</li></Link>   
                        )}
                     {user?.email?(
                        ""
                        ):(
                            <Link to="/login"><li className="btn-secondary">Login</li></Link>  
                        )}



                    
                </ul>
            </div> 
        </nav> 
    )
}