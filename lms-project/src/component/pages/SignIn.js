import React, { useState } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useFormik } from 'formik'
import { useGetUserSignInMutation } from '../../features/user/userApi';
import {  toast } from 'react-toastify';

const SignIn = () => {

 const navigate = useNavigate()
 const [passTog , setPassTog] = useState(false)
 const [signIn , { isLoading }] = useGetUserSignInMutation()
 
 console.log(isLoading) 

 const initialState = {
      email : "",   
      password : ""
 }
  
 const formik = useFormik({
       initialValues : initialState,  
       onSubmit : async(data) => {
            try{
                const result = await signIn(data).unwrap()
                if(result){
                      console.log(result)
                    if(result.message === 'student'){
                        
                        navigate('/dashboard/mycourse')
                    }
                    if(result.message === 'admin'){
                        
                        navigate('/admin/dashboard')
                    }
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
       }
 })
  return ( 
    <div className='w-full'>
        <div className='max-w-[96rem] m-auto min-h-screen relative'>

             <div className='w-full'> 
                   <div className='w-full min-h-screen  bg-gradient-to-r from-cyan-400 to-blue-500 rounded-br-[50%] grid md:grid-cols-2 justify-items-center items-center'>
                       <div className='w-[70%] text-xl self-end sm:self-auto sm:text-4xl min-h-[12rem] text-center text-white font-semibold italic'>
                          <h3>Elevate your learning experience with our LMS portal.</h3>
                       </div>
                       <div className='w-full p-2 sm:w-[24rem] min-h-[20rem] self-start md:self-auto'>
                            <div className='shadow-lg bg-white p-3  border-2 flex flex-col items-center gap-2 rounded-md'>
                               
                                <div>
                                    <h4 className='text-2xl font-light p-2'>SignIn</h4>
                                </div>
                               
                                <form className='w-full flex flex-col gap-3' onSubmit={formik.handleSubmit} >
                                     <div className='flex flex-col gap-2'>
                                        <label className='text-sm font-semibold'>Email Address</label>
                                        <input placeholder='Email Address' className='form-input' type='email' name='email'   value={formik.values.email} onChange={formik.handleChange} /> 
                                     </div>
                                     <div className='flex flex-col gap-2 relative'>
                                        <label className='text-sm font-semibold'>Password</label>
                                        <input placeholder='Password'  type={passTog ? 'text' :'password'} name='password'  value={formik.values.password}  onChange={formik.handleChange}  />
                                        <div className='absolute top-[2.4rem] right-4'>
                                            <p className='text-lg cursor-pointer' onClick={()=> setPassTog(!passTog)}>{ passTog ?  <FaRegEyeSlash /> : <FaRegEye />}</p>
                                        </div>
                                     </div>
                                     {
                                          isLoading ? 
                                         <button className='bg-blue-500 flex items-center justify-center text-white p-1 text-lg rounded-md px-4 italic hover:bg-red-500'>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Loading...
                                         </button>
                                         :
                                         <button className='bg-blue-500 text-white p-1 text-lg rounded-md px-4 italic hover:bg-red-500'>SignIn</button>
                                     }
                                </form>

                                <div className='mt-2'>
                                    <NavLink to='/forgotpassword' className='text-blue-500 text-lg font-light hover:text-black'>Forget Password?</NavLink>
                                </div>   
                            </div> 
                       </div>
                   </div>
             </div>
        </div>
    </div>
  )
}

export default SignIn