import { useFormik } from 'formik'
import React from 'react'
import { userValidation } from '../validations/userValidation'
import { toast } from 'react-toastify'
import { useGetRegisterUserMutation } from '../../../features/user/userApi'

const AdminUser = () => {

    const [Register] = useGetRegisterUserMutation()
    
    const {  values  , errors, handleChange , handleSubmit}  =  useFormik({
          initialValues: {
              username : "",
              email: "",
              mobilenumber:"",       
              password:"",
              usertype: ""
          },
          validationSchema: userValidation,
          onSubmit: async ( data , { resetForm } )=>{
              try{
                   const result = await Register(data).unwrap()
                   if(result){
                      console.log(result)
                      toast.success("Created Success.")
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
                    return toast.error(err.data.message)
                 }
                 return toast.error(err)
              }
          }
    })
           
  console.log(errors)

  return (
    <div className='w-full'>
        <div className='w-full flex flex-col gap-7'>
              <div className='text-xl font-light mt-5'>
                 <h4>User Register</h4>
              </div>
              <div className='w-full'> 
                  <form className='w-[20rem] shadow-lg p-4 border' onSubmit={handleSubmit} >
                       <div className='flex flex-col'>
                           <label className='text-lg p-1'>Username</label>
                           <input type='text' placeholder='username' className='form-input rounded-lg' name='username' value={values.username.toLowerCase()}  onChange={handleChange} />
                           { errors.username && <p className='m-0 text-red-500 font-light'>{errors.username}</p> }
                       </div>
                       <div className='flex flex-col'>
                           <label className='text-lg p-1'>Email</label>
                           <input type='email' placeholder='email' className='form-input rounded-lg' name='email' value={values.email.toLowerCase()} onChange={handleChange} />
                           { errors.email && <p className='m-0 text-red-500 font-light'>{errors.email}</p> }
                       </div>
                       <div className='flex flex-col'>
                           <label className='text-lg p-1'>Mobile Number</label>
                           <input type='number' placeholder='mobilenumber' className='form-input rounded-lg' name='mobilenumber' value={values.mobilenumber}  onChange={handleChange} />
                           { errors.mobilenumber && <p className='m-0 text-red-500 font-light'>{errors.mobilenumber}</p> }
                       </div>
                       <div className='flex flex-col'>
                           <label className='text-lg p-1'>Password</label>
                           <input type='password' placeholder='password' className='form-input rounded-lg' name='password' value={values.password}  onChange={handleChange}  />
                           { errors.password && <p className='m-0 text-red-500 font-light'>{errors.password}</p> }
                       </div>
                       <div  className='flex flex-col'>
                           <label className='text-lg p-1'>UserType</label>
                           <select className='form-select rounded-md' name='usertype' value={values.usertype} onChange={handleChange}>
                                <option value='' disabled selected> select option</option>
                                <option value="student">student</option>
                                <option value="admin">admin</option>
                           </select>
                           { errors.usertype && <p className='m-0 text-red-500 font-light'>{errors.usertype}</p> }
                        </div>
                   <button className='bg-blue-500 p-[0.5rem] mt-4 px-3 rounded-lg text-white font-light'>Register</button>
                  </form>
              </div>
        </div>
    </div>
  )
}

export default AdminUser