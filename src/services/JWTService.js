import jwt from "jsonwebtoken"
require('dotenv').config()

let generateJWTAccessToken = (data) => {
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "60s" })
    return accessToken
}

let generateJWTRefreshToken = (data) => {
    const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "1h" })
    return refreshToken
}

module.exports = {
    generateJWTAccessToken, generateJWTRefreshToken
}