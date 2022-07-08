import AccessForbidden from "../AccessForbidden/AccessForbidden"
import NutritionFeed from "./NutritionFeed"
import "./NutritionPage.css"

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
                            <button className="Button outline small outline aqua ">Record Nutrition</button>
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




