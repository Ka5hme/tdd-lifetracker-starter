const express = require("express");
const router = express.Router();
const Nutrition = require("../models/nutrition")
const security = require("../middleware/security")


router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
    try{
        const {user} = res.locals;
        const nutrition = await Nutrition.listNutritionForUser({user});
        return res.status(201).json({nutrition});
    }catch(err){
        next(err)
    }
})

router.post("/" ,  security.requireAuthenticatedUser, async(req, res, next)=>{
    try{
        const {user} = res.locals;
        const nutrition = await Nutrition.createNutrition({user, nutrition: req.body});
        return res.status(201).json({nutrition});
    }catch(err){
        next(err)
    }
})


module.exports = router