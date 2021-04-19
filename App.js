
const express=require('express');
require('dotenv').config();
const db=require('./db/connection')
const bodyParser=require('body-parser')
const morgan =require('morgan')
const categoryRoute=require('./route/categoryRoute')
const productRoute=require('./route/productRoute')


const app=express()

// middleware
app.use(bodyParser.json())
app.use(morgan('dev'))



//route

app.use('/api',categoryRoute);
app.use('/api',productRoute);


const port=process.env.PORT || 5000


app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
