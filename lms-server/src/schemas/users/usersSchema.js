const mongoose = require('mongoose')



const usersSchema = new mongoose.Schema({ 
       username : {
            type : String,
            required: true,
       },
       email : {
          type : String,
          required: true,
          unique: true
       },
       mobilenumber : {
          type: Number,
          required: true,
          unique: true
       },
       usertype : {
            type:String,
            enum : ['student' , 'trainer' , 'admin'],
            required:true
       },
       password : {
          type : String,
          required:true
       },
       createdAt : {
           type : Date,
           default: () => {
            const currentDateUTC = new Date();
            const currentDateIST = new Date(currentDateUTC.getTime() + (5.5 * 60 * 60 * 1000));
            return currentDateIST;
        }
       }
})


module.exports = mongoose.model('user' , usersSchema)