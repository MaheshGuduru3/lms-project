const { uploadVideos, getBatchInfo, getbatchUpdate, getbatchweekwise, batchAndCourseAdd, getBatchandCourseUpdateWeekwise, groupAllbatchs, getAllbatchNames, getAllWeekwiseinfo, allStudentsEachCourse, allBatchEachCourse, getBatchUpdateVideo } = require('../controllers/batchController')
const { courseUserInfo, getOneCourseUser } = require('../controllers/courseControoller')
const { handleHealth, userSignUp, userSignIn, verifyToken, verifyUser, logOutUser, totalStdAdm } = require('../controllers/userController')

const route = require('express').Router()


route.get('/' , (req,res)=>{
      res.status(200).json({ message : "routers is working...."})
})


route.get('/health' , handleHealth)
route.post('/user' , userSignUp)
route.post('/users' , userSignIn)
route.get('/user' , verifyToken , verifyUser) 
route.post('/logout' , logOutUser)
route.get('/user/count' , totalStdAdm)


// batch
route.post('/batch' , batchAndCourseAdd)
route.get('/batch/:batch' , getBatchInfo)
route.patch('/batch/:batch/:course/:weeksubno' , getbatchUpdate)
route.patch('/batch/video/:batch/:course/:weeksubno' , getBatchUpdateVideo)
route.post('/batch/weekwise' , getbatchweekwise)
route.patch('/batch/weekwise/adm/:batch/:coursename' ,  getBatchandCourseUpdateWeekwise)
route.get('/batch' , getAllbatchNames)
route.post('/batch/adm/schedule' , getAllWeekwiseinfo)
route.get('/batch/course/count' , allStudentsEachCourse)
route.get('/batch/batchs/count' , allBatchEachCourse)

// course

route.post('/course' , courseUserInfo)
route.get('/course/:email' , getOneCourseUser)




module.exports = route
