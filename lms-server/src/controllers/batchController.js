const batchs = require('../schemas/batch/batchSchema')
const asyncErrorHandler = require('../utils/errorHandler')

// the api is used in admin session
const batchAndCourseAdd =  asyncErrorHandler( async (req,res)=>{
        const { batch , coursename , duration , startdate, enddate, mentorname , instructorname } = req.body

        console.log(req.body )
        if(!batch || !coursename || !duration || !startdate || !enddate || !mentorname || !instructorname  ){
              return res.status(499).json({ message:"All fields are required." })
        } 
        
        const check = await batchs.findOne({ $or:[{ coursename,batch} , {batch} ]})

        if(check){
           return res.status(403).json({ message : "Already exited batch." })
        }

        const result = await batchs.create({batch,coursename , duration , startdate, enddate, mentorname , instructorname })
        if(result){
             return res.status(201).json({ message: "Uploaded Success." })
        }
})

//  get one batch using batch unique name  stuudent session 
const getBatchInfo = asyncErrorHandler(async (req,res)=>{
         const { batch  } = req.params
         const result = await batchs.findOne({ batch })
         if(result){
             return res.status(201).json({  message : "Loaded Success" , data:result})
         }
         else{
             return res.status(404).json({ message : "Not Found Batch" })
         }
})

//  updation of batch for updating recording admin session
const getbatchUpdate = asyncErrorHandler(async (req,res)=>{
       const { batch , course , weeksubno }  =  req.params
       const  { zoomlink , recvideolink } = req.body
       console.log("req" , req.body)
       if(zoomlink && !recvideolink){
            // console.log(data)
            if(!zoomlink){
                return res.status(499).json({message:"required."})
            }
            const checking = await batchs.updateOne({ batch , coursename:course,   "weekwise.weeksubno":`${weeksubno}`  } ,{$set: { "weekwise.$.zoomlink": zoomlink }})
            if(checking){
           
                     return res.status(201).json( { message : "Updated Success." ,checking} )
                
            }
            else{
                  return res.status(404).json({ message : "Not Found."})
            }
       }

       if(!zoomlink && recvideolink){
        console.log(recvideolink, "console")
        // if(!recvideolink){
        //     return res.status(499).json({message:"required."})
        // }
        // const checking = await batchs.updateOne({ batch , coursename:course,   "weekwise.weeksubno":`${weeksubno}`  } ,{$set: { "weekwise.$.recvideolink": recvideolink }})
        // if(checking){
       
        //          return res.status(201).json( { message : "Updated Success." ,checking} )
            
        // }
        // else{
        //       return res.status(404).json({ message : "Not Found."})
        // }
   }
       else{
          console.log("scjhsdcjhs")
       }
    })


//  uses in student session for getting live and recording
const getbatchweekwise = asyncErrorHandler(async(req,res)=>{
       const { batch , weeksubno } = req.body
       console.log(batch  , weeksubno)
       if(!batch || !weeksubno){
         return res.status(499).json({ message : "All fields are required." })
       }
       const result = await batchs.findOne({ batch , "weekwise.weeksubno" : `${weeksubno}`  })
       if(result){
         return res.status(201).json({message:"Success" , data : result})
       }
       else{
         return res.status(404).json({message : "Not found" })
       }
})

// admin api
const getBatchandCourseUpdateWeekwise = asyncErrorHandler(async(req,res)=>{
         const { batch , coursename } = req.params
         console.log(req.params , req.body , "hgvfghvhg")
         const  data =  req.body
         if(!data){
           return res.status(499).json({ message: "All Required Field." })
         }
         if(!batch || !coursename){
           return res.status(499).json({ message: "All Required Fields." })
         }
        
         const check = await batchs.findOne({ batch , coursename , "weekwise.weeksubno" : data.weeksubno })

         if(check){
            return res.status(403).json({ message : "Already exists week"})
         }

         const checking = await batchs.findOneAndUpdate({batch,coursename}, { $push: { weekwise : data } })
         if(checking){
            return res.status(201).json({message:"Updated Success."}) 
         }
         else{
           return res.status(404).json({ message : "Not Found" })
         }
}) 

// admin api
const getAllbatchNames = asyncErrorHandler(async(req,res)=>{
      const result = await batchs.find({},{batch:1,_id:0})
      if(result){
          return res.status(201).json({ data:result })
      }
})

// admin api schedule
const getAllWeekwiseinfo = asyncErrorHandler(async(req,res)=>{
        const { batch , coursename }  = req.body
        if(!batch || !coursename){
            return res.status(499).json({ message : "Required All Feilds." })
        }

        const check = await batchs.findOne({ batch , coursename })

        if(check){
            return res.status(201).json({ message: "success" , data:check })
        }
        else{
           return res.status(404).json({  message : "Not Found"})
        }
})


const allStudentsEachCourse = asyncErrorHandler(async(req,res)=>{
       const result = await  batchs.aggregate([
          {
             $group : {
                 _id : "$coursename",
                 totalCount : {
                    $sum : 1
                 }
             }
          }
       ])

       if(result){
           return res.status(201).json({message: "success" , data:result })
       }
})

const allBatchEachCourse = asyncErrorHandler(async(req,res)=>{
       const result = await batchs.aggregate([
        {
          $group: {
              _id: {
                  course: "$coursename",
                  batch: "$batch"
              },
              totCount : {
                  $sum : 1
              }
          }
      },
      
      
       ])

       if(result){
           return res.status(201).json({ message : "success" , data:result })
       }
})

module.exports = {
       batchAndCourseAdd,
       getBatchInfo,
       getbatchUpdate,
       getbatchweekwise,
       getBatchandCourseUpdateWeekwise,
       getAllbatchNames,
       getAllWeekwiseinfo,
       allStudentsEachCourse,
       allBatchEachCourse
}