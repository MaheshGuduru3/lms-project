import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InsideAdminDashboard from './InsideAdminDashboard'
import AdminUser from './AdminUser'
import AdminCourse from './AdminCourse'
import AdminBatch from './AdminBatch'
import { setAdminSide } from '../../../features/user/userSlice'
import { useDispatch } from 'react-redux'
import AdminSchedule from './AdminSchedule'
import { useGetAllbatchsQuery } from '../../../features/batch/batchApi'



const AdminRight = () => {
 
    const paras = useParams()
  
    const dispatch = useDispatch()
  
    const { data } =  useGetAllbatchsQuery()
            
    useEffect(()=>{
        dispatch(setAdminSide(paras.name))
    },[dispatch, paras.name])

  return (
    <div className='w-full'>
        <div className='w-full p-4'>
           { paras.name === 'dashboard' && <><InsideAdminDashboard /></> } 
           { paras.name === 'user' && <><AdminUser /></> } 
           { paras.name === 'course' && <><AdminCourse data={data} /></> } 
           { paras.name === 'batch' && <><AdminBatch data={data} /></> }   
           { paras.name === 'schedule' && <><AdminSchedule data={data} /></>}       
        </div> 
    </div>
  )
}

export default AdminRight