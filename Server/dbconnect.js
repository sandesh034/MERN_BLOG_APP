const mongoose=require("mongoose")
require('dotenv').config()
mongoose.connect(`${process.env.DB_URL}`)
.then(()=>{
    console.log("Database Connected Successfully")
}).catch(()=>{
    console.log("Error occured while connecting database")
})