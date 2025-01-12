import axios from "axios"

class ApiClient {
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "life_tracker_token"
    }

    setToken(token){
        this.token = token
        localStorage.setItem(this.tokenName, token)
    }
    
    async request({ endpoint, method = `GET`, data = {}}) {
        const url = `${this.remoteHostUrl}/${endpoint}`
        console.log("url", url)
        const headers = {
            "Content-Type": "application/json"
        }
    
        if (this.token){
            headers["Authorization"] = `Bearer ${this.token}`
        }
        
        try {
            const res = await axios({ url, method, data, headers })
            console.log(res, url)
            return { data: res.data, error: null }
        } 
        catch (error) {
            console.error("APIclient.makeRequest.error:")
            console.error({ errorResponse: error.response })
            const message = error?.response?.data?.error?.message
            return { data: null, error: message || String(error) }
        }
    }

    async loginUser(credentials) {
        return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
    }
    
    async signupUser(credentials) {
        return await this.request({endpoint: `auth/register`, method: `POST`, data: credentials})
    }

    async fetchUserFromToken() {
        return await this.request({ endpoint: `auth/me`, method: `GET` })
    }

    async logoutUser() 
    {
        this.setToken(null)
        localStorage.setItem(this.tokenName, "")
    }

    async createNutrition(nutrition) {
        return await this.request({endpoint: `nutrition`, method: `POST`, data: nutrition})
    }

    async fetchNutrition(){
        return await this.request({endpoint: `nutrition`, method: `GET`, data: null})
    }

    // async fetchNutrition(user) {
    //     return await this.request({endpoint: `nutrition`, method: `GET`, data: user})
    // }

}




// export default new ApiClient(`http://localhost:3001`)

export default new ApiClient(`https://ka5hme-lifetracker.herokuapp.com`)