const user = require('../schemas/users/usersSchema')
const asyncErrorHandler = require('../utils/errorHandler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// health checking
const handleHealth =  (req,res)=>{
    res.status(200).json({ message : "Health is good."})
}

// Creating user api
const userSignUp =  asyncErrorHandler( async (req, res)=> {
      
      const { username , email , mobilenumber , usertype , password } = req.body
      
      if(!username || !email || !mobilenumber || !password || !usertype){
         return res.status(499).json({ message : "All fields are required."})
      }
      
      const preCheck = await user.findOne({ $or : [ { email} , { mobilenumber } ] })
      
      if(preCheck){
          return res.status(403).json({ message : "Already exists email/phonenumber." })
      }

      const hashPassword = await bcrypt.hash(password , 10)

      const data = { username , email , mobilenumber , usertype , password: hashPassword }

      const insertRecord = await user.create(data)
      if(insertRecord){
          return res.status(201).json({ message : "Created Success."})
      }
})                 


// Getting single user cerendentails
const userSignIn = asyncErrorHandler( async (req, res)=> {   
      const { email , password }  = req.body
      console.log(req.body)
      if(!email || !password){
         return res.status(499).json({ message : "All fields are required." })
      }   
      const checkData = await user.findOne({ email })
      if(checkData){
        
           if(await bcrypt.compare(password , checkData.password)){
              
              const token = jwt.sign({ id : checkData._id }, process.env.JWT_SECERT_KEY , { 
                   expiresIn : '1h'
               })

              res.cookie('tokenSecert' , token , {
                   httpOnly : false,
                   secure : false,
                   sameSite : "strict",
                   maxAge : 1 * 60 * 60 * 1000 
              })
             if( checkData.usertype === 'admin') {  return res.status(201).json({ message : "admin" }) }
             if( checkData.usertype === 'student') {  return res.status(201).json({ message : "student" }) }
            //  if( checkData.usertype === 'trainer') {  return res.status(201).json({ message : "trainer" }) }

            }
           else{
             return res.status(403).json({ message : "Invalid email/password" })
           }
      }
      else{
         return res.status(404).json({ message : "Not Found"})
      }
})

 
const verifyToken = asyncErrorHandler(async (req, res , next)=>{
     const resToken = req.cookies.tokenSecert
     const verifyTok = jwt.verify(resToken, process.env.JWT_SECERT_KEY)
     if(verifyTok){
        req.id = verifyTok.id
        next()
     }  
     else{
       return res.status(403).json({ message : "UnAuthorized Token" })
     }
})


const verifyUser = asyncErrorHandler( async (req,res)=>{
    const resId = req.id
    const resultData = await user.findById(resId , {password:0})
    if(resultData){
        return res.status(201).json({ message : "Logged Success." , data:resultData })
    }
    else{
       return res.status(404).json( { message : "Not Found." })
    }
})

const  logOutUser = asyncErrorHandler(async(req,res)=>{
   const resToken = req.cookies.tokenSecert
    if(resToken){
       const result = res.clearCookie('tokenSecert')
       if(result){                                                                  
           return res.status(200).json({ message : "Logged Out"})
       }
    }
    else{
         return res.status(403).json({ message : "Invalid No Token." })
    }

})


const totalStdAdm = asyncErrorHandler(async(req,res)=>{
       const  result  = await user.find()
       let stdCount = 0;
       let adCount = 0;
       for(let i = 0 ; i < result.length; i++){
            if(result[i].usertype === 'student'){
                   stdCount += 1
            }
            if(result[i].usertype === 'admin'){
                 adCount += 1
            }
       }

       return res.status(201).json({ message: "success" , stdCount , adCount})
})



module.exports = {
       handleHealth, 
       userSignIn,
       userSignUp,
       verifyToken,
       verifyUser,
       logOutUser,
       totalStdAdm
}