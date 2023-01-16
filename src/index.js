import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import initRoutes from './routes/routes.js'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

mongoose.connect(process.env.MONGOOSE_URL, () => {
    console.log("Connect Mongoose Databse success!")
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

initRoutes(app)

app.listen(port, () => {
    console.log(`-------------Web is listening on port ${port}------------`)
})