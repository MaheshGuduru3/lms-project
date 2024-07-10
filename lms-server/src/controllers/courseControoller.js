const course = require('../schemas/course/courseSchema')
const asyncErrorHandler = require('../utils/errorHandler')
const user = require('../schemas/users/usersSchema')



const courseUserInfo = asyncErrorHandler(async(req,res)=>{
     const { email , coursename , batch } = req.body
     if(!email || !coursename || !batch ){
         return res.status(499).json({ message : "All fields are required." })
     }
      const precheck = await user.findOne( {email  })
      if(!precheck){
          return res.status(404).json({ message : "Not Found user, please check email."})
      }
     const checking = await course.findOne({email })
     if(checking){
        return res.status(403).json({ message : "Already Existed Email." })
     }

     const result = await course.create({ email , coursename , batch })

     if(result){
         return res.status(201).json({ message : "created success." })
     }


})  


const getOneCourseUser = asyncErrorHandler( async (req,res)=>{
      const  { email  } = req.params
     
      if(!email){
          return res.status(499).json({ message : "required" })
      }
      const checking = await course.findOne({ email })
      if(checking){
           return res.status(201).json({ message: "success" , data:checking })
      }
      else{
        return res.status(404).json({ message : "Not Found" })
      }
})



module.exports = {
      courseUserInfo,
      getOneCourseUser
}