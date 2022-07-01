import AccessForbidden from "../AccessForbidden/AccessForbidden"


export default function Exercise({user, setUser}){
    const showActivity = () =>
    {
        if (!user?.email) {
            return <AccessForbidden user={user} setUser={setUser}/>
        }
        
   
}
    return (
        <div className="Page">
            {showActivity()}
        </div>
    )
    }