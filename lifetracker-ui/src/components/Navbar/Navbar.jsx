import { Link } from "react-router-dom"
import "./Navbar.css"


export default function NavBar(){
    return(
        <nav className="Navbar">
            <div className="content">
                <div className="logo">
                    <Link to="/"><img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf" alt="codepath logo"/></Link>
                </div>
                <ul className="links">
                    <Link to="/activity"><li>Activity</li></Link>
                    <Link to="/exercise"><li>Exercise</li></Link>
                    <Link to="/nutrition"><li>Nutrition</li></Link>
                    <Link to="/sleep"><li>Sleep</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                    <Link to="/register"><li>Sign Up</li></Link>
                </ul>
            </div> 
        </nav> 
    )
}