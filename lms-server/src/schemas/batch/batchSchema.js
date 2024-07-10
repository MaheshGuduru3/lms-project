const mongoose = require('mongoose')

const batchSchema = new mongoose.Schema({
       batch : {
          type: String,
          required:true,      
          unique:true,
          trim:true
       },
       coursename:{
           type:String,
           required:true, 
           trim:true
       },
       duration:{
            type:Number,
            required:true
       },
       startdate:{
            type:String,
            required:true,
       },
       enddate:{
            type:String,
            required:true
       },
       instructorname:{
            type:String,
            required:true
       },
       mentorname:{
            type:String,
            required:true
       },
       batchstatus:{
           type:String,
           default:"Incomplete"
       },
       weekwise : {
            type : [
                {
                    weeksubno : {
                          type :String,
                          required :true,
                          trim:true,
                    },                  
                    topicname : {
                          type : String,
                          required : true
                    },
                    zoomlink : {
                          type : String,
                          default:"No link"
                    },
                    instructorname : {
                         type : String,
                         required:true
                    },
                    status:{
                         type:String,
                         default:'incomplete'
                    },
                    recvideolink : {
                          type : String,
                          default : "No video"
                    },
                    sessionDate : {
                         type : String,
                         required:true
                     },
                    attendes : [
                          {
                               email : {
                                    type : String,
                               }
                          }
                    ]
                }
            ]  
       }
})


module.exports = mongoose.model('batchs' , batchSchema)