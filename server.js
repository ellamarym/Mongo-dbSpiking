const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)
mongoose.set('strictQuery', false)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', ()=> console.log('connected to DB'))
app.use(express.json())
const practiseRouter = require('./routes/practiseroute')
app.listen(3000, () => {
    console.log('listening on port 3000')
})