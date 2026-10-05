const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try{
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({ message: "login first" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await Register.findById(decoded.Id);

        if(!user){
            return res.status(401).json({ message: "user not found" });
        }

        req.user = user;
        next();
    }catch (error) {
        res.status(401).json({ message: "invalid and expire token" });
    
}
}

module.exports = authMiddleware;