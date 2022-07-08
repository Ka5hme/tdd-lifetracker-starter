
import { useState, useEffect } from "react"
import NutritionCard from "./NutritionCard"
import * as React from "react"
import API from "../../services/apiClient"

export default function NutritionFeed({user}) {

    const [nutrition, setNutrition] = useState([])

    const [error, setError] = useState(null)

    async function nutritionInfo(){
        
        const {data, err} = await API.fetchNutrition(user)
        if(err)
        setError(err)
        if(data){
            console.log(data)
            setNutrition(data.nutrition)
        }
    }

    useEffect(()=>{
        nutritionInfo()
    }, []);


    // useEffect(() => {
    //     const nutritionInfo = async () => {
            
    //       try {
    //         const { data } = await API.fetchNutrition(user);
    //         setNutrition(data.nutrition);
            
    //       } catch (err) {
    //         setError(err);
    //       }
    
         
    //     };
        
    //     nutritionInfo();
    //   }, []);
    
    

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


    