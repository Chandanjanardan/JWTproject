const login = async(req,res)=>{
    res.send("Fake login/register route")
}
const dashboard = async (req,res)=>{
    const luckyNumber = Match.floor(Math.random()*1000)
    res.status(200).json({msg:`Hello , john Doe , secret`})
}

module.exports={
    login,dashboard
}