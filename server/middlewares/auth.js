import jwt from "jsonwebtoken"

// middleware func to decode jwt token to get clerk id
const authUser = async (req, res, next) =>{
    try {
        
        const {token} = req.headers

        if(!token){
            return res.json({success:false, message:"not authorized login again"})
        }

        const token_decode = jwt.decode(token)
        req.clerkId = token_decode.clerkId
        next()

    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}

export default authUser