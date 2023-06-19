const express = require("express")
const router = express.Router()


const {login,dashboard, test}= require("../controllers/main")


router.get("/",test)
router.get("/dashboard",dashboard)
router.route("/login").post(login)


module.exports= router