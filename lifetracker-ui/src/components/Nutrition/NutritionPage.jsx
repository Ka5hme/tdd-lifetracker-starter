import AccessForbidden from "../AccessForbidden/AccessForbidden"
import NutritionFeed from "./NutritionFeed"
import "./NutritionPage.css"
import { Link } from "react-router-dom"

export default function Nutrition({user, setUser}){






    const showActivity = () =>
    {
        if (!user?.email) {
            return <AccessForbidden user={user} setUser={setUser}/>
        }
        
    

    return(
        <div className="NutritionPage" >
            
            <div className="Banner">
                <h1>Nutrition</h1>
            </div>
                <div className="content">
                    <div className="NutritionOverview">
                        <div className="header">
                            <h3>Overview</h3>
                            <Link to="/nutrition/create">
                                <button className="Button outline small outline aqua ">Record Nutrition</button>
                            </Link>
                        </div>
                        <div className="feed">
                            <NutritionFeed />
                        </div>
                    </div>
                </div>
        </div>
    )
        }
    return (
        <div className="Page">
            {showActivity()}
        </div>
    )
}




