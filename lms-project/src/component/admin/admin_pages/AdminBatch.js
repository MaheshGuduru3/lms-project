import { useFormik } from 'formik'
import React from 'react'
import { batchValidation, batchValidation1 } from '../validations/batchValidation'
import {  useAddBatchandCourseMutation, useAddWeekwiseCourseBatchAdminMutation } from '../../../features/batch/batchApi'
import { toast } from 'react-toastify'

const AdminBatch = (data) => {

     const [addBatchCourse] = useAddBatchandCourseMutation()
     const [addWeekwiseadmin] = useAddWeekwiseCourseBatchAdminMutation()
    
     const { values , errors , handleChange,  handleSubmit } = useFormik({
             initialValues:{
                   batch:"",
                   coursename:"" ,
                   instructorname:"",
                    mentorname:"",
                    duration:"",
                    startdate:"",
                    enddate:""
             },
             validationSchema:batchValidation,  
             onSubmit: async(data , { resetForm })=>{
                   try{    
                          if(data.startdate === data.enddate){
                              return toast.error("same date , please change")
                          }
                          const result = await addBatchCourse(data).unwrap()
                          if(result){
                             toast.success(result.message)
                             resetForm()
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
                   if(err.status === 500){
                      return toast.error(err.status)
                   }
  
                   return toast.error(err)
              
                   }
             },
            
   })


   const { values:values1 , errors:errors1 , handleChange:handleChange1 , handleSubmit:handleSubmit1 } = useFormik({
                initialValues:{
                    batch  : "", 
                    coursename : "",
                    weeksubno:"" ,
                    instructorname:"",
                    sessiondate:"",
                    topicname:""
                },
                validationSchema:batchValidation1, 
                onSubmit:async(data , { resetForm })=>{
                     try{
                        const { batch , coursename } = data
                        const data1 =  { weeksubno:data.weeksubno , instructorname:data.instructorname ,  topicname:data.topicname , sessiondate:data.sessiondate }
                        const s = new Date().toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric',
                        month: '2-digit',
                        day: '2-digit' });

                       const d = `${s.split('/')[2]}-${s.split('/')[1]}-${s.split('/')[0]}`
                        console.log(d, data.sessiondate)
                        if(d !== data.sessiondate){
                               return toast.error(`today date is ${s}`)
                        }

                        const result = await addWeekwiseadmin({batch , coursename , data1}).unwrap()
                     
                        if(result){
                            toast.success(result.message)    
                            resetForm() 
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
                       if(err.status === 500){
                          return toast.error(err.status)
                       }
                     console.log(err)
                       return toast.error(err)
                  
                       }
                }
   })


  return (
    <div className='w-full flex flex-col gap-5'>
       <div className='w-[70%] m-auto'>
             <div className='text-lg font-extralight'>
              <h4>Add Batch and Coursename</h4>
             </div>
             <div className='w-full'>
                <form className='shadow-lg flex flex-col gap-2 p-3' onSubmit={handleSubmit}>  
                     <div className='flex flex-wrap gap-2'>
                     <div className='flex flex-col flex-1'>
                           <label className='text-lg p-1'>Batch</label>
                           <input type='text' placeholder='batch' className='form-input rounded-lg' name='batch' value={values.batch}  onChange={handleChange} />
                           { errors.batch && <p className='m-0 text-red-500 font-light'>{errors.batch}</p> }
                       </div>
                     <div className='flex flex-col flex-1'>
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
                           <label className='text-lg p-1'>Instructorname</label>
                           <input type='text' placeholder='instructorname' className='form-input rounded-lg' name='instructorname' value={values.instructorname}  onChange={handleChange}  />
                           { errors.instructorname && <p className='m-0 text-red-500 font-light'>{errors.instructorname}</p> }
                       </div>
                       <div className='flex flex-col'>
                           <label className='text-lg p-1'>Mentorname</label>
                           <input type='text' placeholder='mentorname' className='form-input rounded-lg' name='mentorname' value={values.mentorname}  onChange={handleChange}  />
                           { errors.mentorname && <p className='m-0 text-red-500 font-light'>{errors.mentorname}</p> }
                       </div>
                       <div  className='flex flex-col'>
                           <label className='text-lg p-1'>Duration</label>
                           <select className='form-select rounded-md' name='duration' value={values.duration} onChange={handleChange}>
                                <option value="" disabled selected>Select Duration</option>
                                <option value={8}>8</option>
                                <option value={12}>12</option>
                           </select>
                           { errors.duration&& <p className='m-0 text-red-500 font-light'>{errors.duration}</p> }
                        </div>
                        <div className='flex flex-col'>
                           <label className='text-lg p-1'>StartDate</label>
                           <input type='date' placeholder='mentorname' className='form-input rounded-lg' name='startdate' value={values.startdate}  onChange={handleChange}  />
                           { errors.startdate && <p className='m-0 text-red-500 font-light'>{errors.startdate}</p> }
                       </div>
                       <div className='flex flex-col'>
                           <label className='text-lg p-1'>End Date</label>
                           <input type='date' placeholder='mentorname' className='form-input rounded-lg' name='enddate' value={values.enddate}  onChange={handleChange}  />
                           { errors.enddate && <p className='m-0 text-red-500 font-light'>{errors.enddate}</p> }
                       </div>
                     </div>
                     <button className='bg-blue-500 p-1 px-3 rounded-md text-white'>Add</button>
                </form>
             </div>
        </div> 

       <div className='w-[70%] m-auto'>
            <div className='text-lg font-extralight'>
                <h3>Update WeekWise By Using Batch and Coursename</h3>
            </div>
             <div className='w-full'>
                <form className='shadow-lg flex flex-col gap-2 p-3' onSubmit={handleSubmit1}>  
                     <div className='flex flex-wrap gap-2'>
                     <div className='flex flex-col flex-1'>
                           <label className='text-lg p-1'>Batch</label>
                           <select className='form-select rounded-lg' name='batch' value={values1.batch} onChange={handleChange1}>
                              <option value=""  disabled selected>Select batch</option>
                              {
                                 data?.data?.data?.map((i)=>(
                                    <option value={i.batch}>{i.batch}</option>
                                 ))
                              }
                            </select>            
                     { errors1.batch && <p className='m-0 text-red-500 font-light'>{errors1.batch}</p> }
                       </div>
                     <div className='flex flex-col flex-1'>
                           <label className='text-lg p-1'>Coursename</label>
                          <select className='form-select rounded-lg' name='coursename' value={values1.coursename} onChange={handleChange1}>
                              <option value=""  disabled selected>Select Course</option>
                              <option value="fullstackwebdeveloper">Full Stack Web Developer</option>
                              <option value="datascience">Data Science</option>
                              <option value="machinelearning">Machine Learning</option>
                              <option value="digitalmarketing">Digital Marketing</option>
                              <option value="java">Java</option>
                              <option value="python">Python</option>
                          </select>
                           { errors1.coursename && <p className='m-0 text-red-500 font-light'>{errors1.coursename}</p> }
                       </div>
                       <div className='flex flex-col flex-1'>
                           <label className='text-lg p-1'>Weeksubno</label>
                           <input type='text' placeholder='WeekSubno' className='form-input rounded-lg' name='weeksubno' value={values1.weeksubno}  onChange={handleChange1} />
                           { errors1.weeksubno && <p className='m-0 text-red-500 font-light'>{errors1.weeksubno}</p> }
                       </div>
                       <div className='flex flex-col flex-1'>
                           <label className='text-lg p-1'>Instructorname</label>
                           <input type='text' placeholder='Instructorname' className='form-input rounded-lg' name='instructorname' value={values1.instructorname}  onChange={handleChange1} />
                           { errors1.instructorname && <p className='m-0 text-red-500 font-light'>{errors1.instructorname}</p> }
                       </div>
                       <div className='flex flex-col flex-1'>
                           <label className='text-lg p-1'>topicname</label>
                           <input type='text' placeholder='topicname' className='form-input rounded-lg' name='topicname' value={values1.topicname}  onChange={handleChange1} />
                           { errors1.topicname && <p className='m-0 text-red-500 font-light'>{errors1.topicname}</p> }
                       </div>
                       <div className='flex flex-col flex-1'>
                           <label className='text-lg p-1'>sessiondate</label>
                           <input type='date' placeholder='sessiondate' className='form-input rounded-lg' name='sessiondate' value={values1.sessiondate}  onChange={handleChange1} />
                           { errors1.sessiondate && <p className='m-0 text-red-500 font-light'>{errors1.sessiondate}</p> }
                       </div>
                     </div>
                     <button className='bg-blue-500 p-1 px-3 rounded-md text-white'>Search</button>
                </form>
             </div>
       </div>

    </div>
  )
}

export default AdminBatch