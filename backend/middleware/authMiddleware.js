const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) => {
    try{
        const token = req.header('Authorization')?.replace('Bearer', '')
        if(!token){
            return res.status(401).json({message: "No token, authorazation denied baby"})
        }
        
        const decoded = jwt.verify(token, "secretkey")
        req.user = decoded;

        next()
    } catch (err) {
        res.status(401).json({message:"Invalid or expired token"})
    }
}

module.exports = authMiddleware;