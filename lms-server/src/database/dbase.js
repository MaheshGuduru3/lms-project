const mongoose = require('mongoose')

const url = process.env.MONGODB_URL


const connectToDb = async ()=>{
     try{
          const result = await mongoose.connect(url)
          if(result){
              console.log("Database is connected...")
          }
     }
     catch(err){
          console.log(err.message)
     }
}


module.exports = connectToDb