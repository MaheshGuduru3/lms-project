const mongoose = require('mongoose')


const courseSchema = new mongoose.Schema({
      email: {
          type: String,
          required: true,
          unique:true
      },
      coursename : {
         type: String,
         required:true,
      },
      batch: {
         type: String,
         required: true
     },
     performance : {
         type: [
            {
                weekno : {
                     type:String
                },
                weeksubno:{
                    type:String
                },
                quizscore:{
                     type: Number
                }
            }
         ]
     }
})

module.exports = mongoose.model('course' , courseSchema)