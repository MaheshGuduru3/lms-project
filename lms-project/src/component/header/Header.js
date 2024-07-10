import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet , NavLink } from 'react-router-dom'
import { useLogOutUserMutation } from '../../features/user/userApi'
import { toast } from 'react-toastify'
import {  setUser } from '../../features/user/userSlice'


const Header = () => {
   
  const { User} = useSelector(state=>state.userslice)
  const [LogOut] = useLogOutUserMutation()
  const dispatch = useDispatch()

 const logoutHandler = async()=>{
      try{
        const result = await LogOut().unwrap()
        if(result){
             dispatch(setUser([]))  
             toast.success(result.message)
        }
      }
      catch(err){
          console.log(err)
           toast.error(err)
      }
 }


  return (
    <div className='w-full'>
         <div className='max-w-[96rem] m-auto'>
               <div className='w-full border-b-2 shadow-md flex justify-between p-4'>
                    <div className='w-[10rem] flex justify-around items-center'>
                          <NavLink to='/' className='text-lg font-semibold'>LMS PORTAL</NavLink>
                    </div>  
                    <div className='w-[20rem] flex justify-around'> 
                        
                        {
                            User && User.length === undefined ?
                           <NavLink to='/' className='text-white font-semibold bg-blue-500 rounded-md p-1 px-4' onClick={logoutHandler}>LogOut</NavLink>
                           :
                           <>
                           <NavLink to='/courses' className='font-light text-lg hover:opacity-35'>Courses</NavLink>
                           <NavLink to='/signin' className='text-white font-semibold bg-blue-500 rounded-md p-1 px-4'>SignIn</NavLink>
                           </>
                        }
                    </div> 
               </div>  
         </div>
         <Outlet />
    </div>
  )
}

export default Header