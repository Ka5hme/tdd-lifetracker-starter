import "./Landing.css"
import workout from "../../Assets/icons-workout-48.4f4cdb05.svg"
import planner from "../../Assets/icons8-planner-100.997ca54c.svg"
import porridge from "../../Assets/icons8-porridge-100.132d2715.svg"
import resting from "../../Assets/icons8-resting-100.81067336.svg"
import watch from "../../Assets/smartwatch-screen-digital-device.e2983a85.svg"


export default function Landing(){
    return(
        <div class="Landing">
            <div className="hero">
                <img src={watch} alt="hero img"></img>
                <h1>Life Tracker</h1>
                <p>Helping you take back control of your world</p>
            </div>
            <div className="tiles">
                <div className="tile">
                    <img src={workout} alt="Fitness"></img>
                    <p>Fitness</p>
                </div>
                <div className="tile">
                    <img src={porridge} alt="Food"></img>
                    <p>Food</p>
                </div>
                <div className="tile">
                    <img src={resting} alt="Rest"></img>
                    <p>Rest</p>
                </div>
                <div className="tile">
                    <img src={planner} alt="Planner"></img>
                    <p>Planner</p>
                </div>
            </div>
        </div>
    )
}