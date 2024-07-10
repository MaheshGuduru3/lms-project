import { useFormik } from 'formik'
import React from 'react'
import { courseValidation } from '../validations/courseValidation'
import { useGetUserCourseRegisterMutation } from '../../../features/course/courseApi'
import { toast } from "react-toastify"

const AdminCourse = (data) => {
  
    const [courseReg]  = useGetUserCourseRegisterMutation()


   const { values , errors , handleSubmit , handleChange }  = useFormik({
             initialValues:{
                   coursename:"",
                   email:"",
                   batch:"",
             },
             validationSchema:courseValidation,
             onSubmit: async(data)=>{
                   try{
                         const result = await courseReg(data).unwrap()
                         if(result){
                             toast.success(result.message)
                         }  
                   } 
                   catch(err){
                    if(err.status === 403){
                      return toast.error(err.data.message)
                   }
                   if(err.status === 404){
                      return toast.error(err.data.message)
                   }
                   if(err.status === 499){
                      return toast.error(err.data.message)
                   }
  
                   return toast.error(err)
                   }
             }
   })

  return (
    <div className='w-full'>
         <div className='w-full'>  
              <div className='p-2 flex flex-col gap-2'>
                  <div className='text-lg font-extralight'>
                     <h4>User Course Register</h4>
                  </div>
                  <form className='w-[20rem] shadow-lg p-4 border' onSubmit={handleSubmit} >
                       <div className='flex flex-col'>
                           <label className='text-lg p-1'>Coursename</label>
                          <select className='form-select rounded-lg' name='coursename' value={values.coursename} onChange={handleChange}>
                              <option value=""  disabled selected>Select Course</option>
                              <option value="fullstackwebdeveloper">Full Stack Web Developer</option>
                              <option value="datascience">Data Science</option>
                              <option value="machinelearning">Machine Learning</option>
                              <option value="digitalmarketing">Digital Marketing</option>
                              <option value="java">Java</option>
                              <option value="python">Python</option>
                          </select>
                           { errors.coursename && <p className='m-0 text-red-500 font-light'>{errors.coursename}</p> }
                       </div>
                       <div className='flex flex-col'>
                           <label className='text-lg p-1'>Email</label>
                           <input type='email' placeholder='email' className='form-input rounded-lg' name='email' value={values.email.toLowerCase()} onChange={handleChange} />
                           { errors.email && <p className='m-0 text-red-500 font-light'>{errors.email}</p> }
                       </div>
                       <div className='flex flex-col'>
                           <label className='text-lg p-1'>Batch</label>
                           <select className='form-select rounded-lg' name='batch' value={values.batch} onChange={handleChange}>
                              <option value=""  disabled selected>Select batch</option>
                              {
                                 data?.data?.data?.map((i)=>(
                                    <option value={i.batch}>{i.batch}</option>
                                 ))
                              }
                            </select>
                          { errors.batch && <p className='m-0 text-red-500 font-light'>{errors.batch}</p> }
                       </div>
                   <button className='bg-blue-500 p-[0.5rem] mt-4 px-3 rounded-lg text-white font-light'>Course Register</button>
                  </form>
              </div>
         </div>
    </div> 
  )
}

export default AdminCourse