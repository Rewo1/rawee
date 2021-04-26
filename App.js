
const express=require('express');
require('dotenv').config();
const db=require('./db/connection')
const bodyParser=require('body-parser')
const morgan =require('morgan')
const expressValidator=require('express-validator')
const categoryRoute=require('./route/categoryRoute')
const productRoute=require('./route/productRoute')
const userRoute=require('./route/userRoute')
const cookieParser=require('cookie-parser')


const app=express()

// middleware



app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(expressValidator())
app.use(cookieParser())



//route

app.use('/api',categoryRoute);
app.use('/api',productRoute);
app.use('/api',userRoute);


const port=process.env.PORT || 5000


app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
