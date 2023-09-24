// check username ,password in post(login ) request
// if exist create new jwt
// send back to front=end

// setup authentication so only the request with jwt can access the dashboard
const CustomAPIError = require("../errors/custom-error")
const jwt = require("jsonwebtoken")


const test = async(req,res)=>{
    res.json({msg:"Hello this is test rotes and controller"})
}

const login = async(req,res)=>{
    const {username,password}=req.body
    if(!username || !password){
        throw new CustomAPIError("Please provide email and password",400)
    }
    // demo 
    const id =new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{
        expiresIn:"30d"
    })
    res.status(200).json({msg:`User created`, token})
    console.log(username,password)
    // res.send("Fake login/register route")
}
const dashboard = async (req,res)=>{
    console.log(req.headers)
    // set here first after that moved to middleware
    // const authHeader = req.headers.authorization;
    // if(!authHeader ){
    //     throw new CustomAPIError("No token",401)
    // }
    // const token = authHeader.split(" ")[1]
    // try {
    //     const decoded = jwt.verify(token,process.env.JWT_SECRET)
    //     // I set this line after decoded 
    //     const luckyNumber = Math.floor(Math.random()*1000)
    //     res.status(200).json({msg:`Hello , ${decoded.username} `,
    // secret:`${luckyNumber}`})
    //     console.log(decoded)
    // } catch (error) {
    //     throw new CustomAPIError("Not authorized to access this route",401)
    // }
    // console.log(token)
    // console.log(req.user)
    // const luckyNumber = Math.floor(Math.random()*1000)
    //     res.status(200).json({msg:`Hello ,${req.user.username} `,
    // secret:`${luckyNumber}`})
        
    // } 
   


module.exports={
    login,dashboard,test
}