import React, { useEffect } from 'react'
import { useGetUserDetailsQuery } from '../../features/user/userApi'
import { setCourse, setUser } from '../../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import LeftSide from './module_s_pages/LeftSide'
import RightSide from './module_s_pages/RightSide'
import { useGetOneCourseUserQuery } from '../../features/course/courseApi'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const { toggle  }  = useSelector(state => state.userslice )
    const dispatch = useDispatch()  
    const {  data  } =  useGetUserDetailsQuery()
    const { data:data1 } = useGetOneCourseUserQuery(data?.data?.email ? data?.data?.email : null)
    const navigate = useNavigate()
    console.log(data , data1)         


useEffect(()=>{
    dispatch(setUser(data))  
    dispatch(setCourse(data1)) 
    if(data?.data?.email !== data?.data?.email){
             alert("check your ceredentails")
             navigate('/')
    }
},[data,dispatch , data1])

  return (
    <div className='w-full'>
        <div className='max-w-[96rem] m-auto'>
          <div className='w-full flex'>
               <div className={toggle ? 'w-[15rem] transition-all duration-500' : 'w-[0%]'}>
                 { toggle  &&  <LeftSide />}
               </div> 
               <div className={toggle ? 'w-full' : 'w-full transition-all  duration-1000'}>
                    <RightSide />
               </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard