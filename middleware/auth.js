const jwt = require ("jsonwebtoken")

const CustomAPIError= require("../errors/custom-error")
const authenticationMiddleWare = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader ){
        throw new CustomAPIError("No token",401)
    }
    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
       const {id,username}= decoded
       req.user={id,username}
    } catch (error) {
        throw new CustomAPIError("Not authorized to access this route",401)
    }
    next()
}

module.exports = authenticationMiddleWare

// mongodb transation
// mongodb indexing
// mongodb refrencing 
// mongodb embeded doc.
