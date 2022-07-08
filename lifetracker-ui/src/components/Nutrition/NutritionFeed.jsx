import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import apiClient from "../../services/apiClient"
import NutritionCard from "./NutritionCard"
import * as React from "react"
import API from "../../services/apiClient"

export default function NutritionDetails({user}) {

    const [nutrition, setNutrition] = useState([])

    const [error, setError] = useState(null)

    async function nutritionInfo(){
        const {data, err} = await API.fetchNutrition()
        if(err)
        setError(err)
        if(data){
            setNutrition(data.nutrition)
        }
    }

    useEffect(()=>{
        nutritionInfo()
    }, []);

    return(
        
        <div className="feed">
        {nutrition.length != 0 ?
          
          nutrition.map((info) => (<NutritionCard key={info.nutritionId} name={info.name} category={info.category} calories={info.calories} imageUrl={info.image} quantity={info.quantity} createdAt={info.created} id={info.id} /> ))
          : 
          <div className="empty">
            <h2>Nothing here yet.</h2>
           </div>
           }
      </div>
    )
   

}


    