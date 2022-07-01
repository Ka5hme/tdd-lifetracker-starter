const express = require("express")
const router = express.Router()
const security = require("../middleware/security")
const Activity = require("../models/activity")


router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { user } = res.locals
    } 
    catch(error){
        next(error)
    }
})


module.exports = router