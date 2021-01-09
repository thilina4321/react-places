const express = require('express')
const app = express()
const cors = require('cors') 
const mongoose = require('mongoose')

//routers
const userRouter = require('./router/user')
const placeRouter = require('./router/place')

app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/place', placeRouter)

mongoose.connect('mongodb://127.0.0.1:27017/places',{
    useNewUrlParser: true,useUnifiedTopology: true
} ).then(()=>{
    console.log('datanase is connect');
}).catch(error=>{
    console.log('database is not connect');
})

const port  = process.env.PORT || 3001
app.listen(port , ()=>{
    console.log('port runs on ', port);
})