module.exports.validateQueryParam=(req, res, next)=>{
const {user} =req.query
if(!user || user !=="dhiraj"){
    return res.status(200).send({message:"you are not allowed to this"})
}
next()
}