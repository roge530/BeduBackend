import jwt from "jsonwebtoken";

export const customerAuth = (req, res, next) => {
    try {
        let token = req.headers?.authorization
        if (!token) throw new Error('No estas autorizado')

        token = token.split(" ")[1]
        const {uid} = jwt.verify(token, process.env.JWT_SECRET)
        if(uid){
            req.params.id = uid
            return next()
        } else {
            return res.sendStatus(403);
        }
        
    } catch (error) {
        console.log(error)
        return res.status(403).json({error: error.message})
    }
}