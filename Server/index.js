const express=require("express")
const app=express()
require('dotenv').config()
const cors=require('cors')
require("./dbconnect")
const cookieParser=require('cookie-parser')
const router=require("./Routers/routes")

app.use(
    cors({
      origin: 'http://localhost:3000', // Replace with your frontend's URL
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true, // Allow credentials when needed
    })
  );
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',router)

// const otp=Math.floor((Math.random()*1000000))

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server Started at ${process.env.PORT}`)
})

