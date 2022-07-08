import * as React from "react";
import "./NutritionCard.css"

export default function NutritionCard(props) {
    
    return (
        <div className="NutritionCard">
            <div className="card-header" >
                <span >
                  <img src={`${props.imageUrl}`} alt="Nutrition picture"></img>
                </span>
                <span>
                  <p className="title">{props.name}</p>
                </span>
            </div>
            <div className="card-stats">
                <div className="CardStat">
                  <p>Quantity</p>
                  <span>{props.quantity}</span>
                </div>
                <div className="CardStat">
                  <p>Calories</p>
                  <span>{props.calories}</span>
                </div>
              </div>
            <div className="card-meta">
            <small className="Time">{props.createdAt}</small>
              <small className="category">{props.category}</small>
            </div>
        </div>
    );
}