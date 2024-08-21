const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const cookieParse = require('cookie-parser')
const dbs = require('../src/database/dbase')
const app = express()
const fileUpload = require('express-fileupload');
const allApi  = require('../src/routes/routers')
const asyncErrorHandler = require('./utils/errorHandler')


const port = process.env.PORT || 3301

// database connection
dbs()


// middleware
app.use(cors({
      origin : ['http://localhost:3000', '*'] ,
      credentials:true
}))

app.use(cookieParse())
app.use(express.json())
app.use(fileUpload());
app.use('/api' , allApi)
app.use(asyncErrorHandler)
app.use((error, req,res,next) => {
       error.statusCode = error.statusCode || 500
       return res.status(error.statusCode).json({message : error.message})
})


// normal route  
app.get('/', (req,res)=>{
    
    return  res.status(200).json({ message : "Normal route is working..."})
})


// making our server here 
app.listen(port , ()=>{

      console.log(`server is connected on port ${port} :  http://localhost:${port}`)
})