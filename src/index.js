import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

mongoose.connect(process.env.MONGOOSE_URL, () => {
    console.log("Connect db access!")
})

app.use(cors())
app.use(cookieParser)
app.use(express.json())

app.listen(port, () => {
    console.log(`-------------Web is listening on port ${port}------------`)
})