// check username ,password in post(login ) request
// if exist create new jwt
// send back to front=end

// setup authentication so only the request with jwt can access the dashboard
const customAPIError = require("../errors/custom-error")

const test = async(req,res)=>{
    res.json({msg:"Hello this is test rotes and controller"})
}

const login = async(req,res)=>{
    const {username,password}=req.body
    if(!username || !password){

    }

    // 

    console.log(username,password)
    res.send("Fake login/register route")
}
const dashboard = async (req,res)=>{

        const luckyNumber = Math.floor(Math.random()*1000)
        res.status(200).json({msg:`Hello , john Doe `,
    secret:`${luckyNumber}`})
        
    } 
   


module.exports={
    login,dashboard,test
}