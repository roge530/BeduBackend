import jwt from "jsonwebtoken";

export const vetAuth = (req, res, next) => {
    try {
        let token = req.headers?.authorization
        if (!token) throw new Error('No estas autorizado')

        token = token.split(" ")[1]
        const {uid} = jwt.verify(token, process.env.JWT_SECRET)
        if(token && uid === 1){
            next()
        } else {
            return res.sendStatus(403);
        }
        
    } catch (error) {
        console.log(error)
        return res.status(403).json({error: error.message})
    }
}

export const assistVetAut = (req, res, next) => {
    try {
        let token = req.headers?.authorization
        if (!token) throw new Error('No estas autorizado')

        token = token.split(" ")[1]
        const {uid} = jwt.verify(token, process.env.JWT_SECRET)
        if(token && uid >= 0 && uid <= 1){
            next()
        } else {
            return res.sendStatus(403);
        }
        
    } catch (error) {
        console.log(error)
        return res.status(403).json({error: error.message})
    }
}

export const adminAuth = (req, res, next) => {
    try {
        let token = req.headers?.authorization
        if (!token) throw new Error('No estas autorizado')

        token = token.split(" ")[1]
        const {uid} = jwt.verify(token, process.env.JWT_SECRET)
        if(token && uid === 2){
            next()
        } else {
            return res.sendStatus(403);
        }
        
    } catch (error) {
        console.log(error)
        return res.status(403).json({error: error.message})
    }
}