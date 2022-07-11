const {PORT} = require("./config")
const app = require("./app")

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`Server running http://localhost:${PORT}`)
}) 
