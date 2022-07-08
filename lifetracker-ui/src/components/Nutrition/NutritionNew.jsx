import AccessForbidden from "../AccessForbidden/AccessForbidden"
import NutritionForm from "./NutritionForm"


export default function NutritionNew({user, setUser}){
    const showActivity = () =>{
        if (!user?.email) {
            return <AccessForbidden user={user} setUser={setUser}/>
        }

        return(
            <NutritionForm />
        )
}
    

    return (
        <div className="Page">
            {showActivity()}
        </div>
    )
}

