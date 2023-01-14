import express from 'express'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`-------------Web is listening on port ${port}------------`)
})