import "./Activity.css"
import AccessForbidden from "../AccessForbidden/AccessForbidden"
import { Link } from 'react-router-dom'

export default function Activity({user, setUser}){
    const showActivity = () =>{
        if (!user?.email) {
            return <AccessForbidden user={user} setUser={setUser}/>
        }
        
    return(
    <div className="ActivityPage">
        <div className="content">
            <div className="actions">
                <h2 className="heading">Activity Feed</h2>
                <div className="buttons">
                    <Link to='/exercise/create' className='exercise-btn'>Add Exercise</Link>
                    <Link to='/sleep/create' className='sleep-btn'>Log Sleep</Link>
                    <Link to="/nutrition/create" className='nutrition-btn'>Record Nutrition</Link>
                </div>
            </div>
            <div className="stats">
                <div className="main">
                    <div className="SummaryStat large gold">
                        <div className="background">
                            <p>Total Exercise Minutes</p>
                            <h1>100</h1>
                           
                        </div>
                    </div>
                    <div className="SummaryStat large purple">
                        <div className="background">
                            <p>Avg Sleep Hours</p>
                            <h1>8</h1>
                           
                        </div>
                    </div>
                    <div className="SummaryStat large aqua">
                        <div className="background">
                            <p>Avg Daily Calories</p>
                            <h1>2050</h1>
                            
                        </div>
                    </div>
                </div>
                <h4>More Stats</h4>
                <div className="SummaryStat small teal">
                    <div className="background">
                        <p>Maximum Hourly Calories</p>
                        <h1>400</h1>
                       
                    </div>
                </div>
                <div className="SummaryStat small orange">
                    <div className="background">
                        <p>Avg Exercise Intensity</p>
                        <h1>500</h1>
                        
                    </div>
                </div>
                <div className="SummaryStat small red">
                    <div className="background">
                        <p>Total Hours Slept</p>
                        <h1>48</h1>
                        
                    </div>
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