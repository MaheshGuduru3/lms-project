import React, { useEffect } from 'react'
import AdminLeft from './admin_pages/AdminLeft'
import AdminRight from './admin_pages/AdminRight'
import { setUser } from '../../features/user/userSlice'
import { useGetUserDetailsQuery } from '../../features/user/userApi'
import { useDispatch  } from 'react-redux'


const AdminDashboard = () => {
    console.log("admindashboard")
    const dispatch = useDispatch()  
    const {  data  } =  useGetUserDetailsQuery() 
    useEffect(()=>{
          dispatch(setUser(data))
    },[data,dispatch])
  return (
    <div className='w-full'>
        <div className='max-w-[96rem] m-auto'>
            <div className='w-full flex'>
            <div className={true ? 'w-[15rem] transition-all duration-500' : 'w-[0%]'}>
                 { true  &&  <AdminLeft />}
               </div> 
               <div className={true ? 'w-full' : 'w-full transition-all  duration-1000'}>
                    <AdminRight />  
               </div>
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard