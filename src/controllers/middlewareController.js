import jwt from "jsonwebtoken"

const middlewareController = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    res.status(403).json("Token is not valid")
                }
                else {
                    req.user = user;
                    next();
                }
            })
        }
        else {
            res.status(401).json("You are not authenticated!")
        }
    }
}

module.exports = middlewareController