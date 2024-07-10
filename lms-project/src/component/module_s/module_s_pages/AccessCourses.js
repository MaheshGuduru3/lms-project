import React, { useEffect } from 'react'
import AccessRight from './AccessRight'
import AccessLeft from './AccessLeft'
import { useSelector } from 'react-redux'


const AccessCourses = () => {

  const { toggle1  , course} = useSelector(state=> state.userslice)
   console.log(toggle1)

  console.log(course)     

  useEffect(()=>{

  },[course])

  return (
    <div className='w-full'>
        <div className='max-w-[96rem] m-auto'>
             <div className='w-full'>
                <div className='w-full flex'>
                <div className={toggle1 ? 'w-[15rem] transition-all duration-500' : 'w-[0%]'}>
                 { toggle1  &&  <AccessLeft />}
               </div> 
               <div className={ toggle1 ? 'w-full' : 'w-full transition-all  duration-1000'}>
                    <AccessRight /> 
               </div>
                </div> 
             </div>
          </div>
    </div>
  )
}

export default AccessCourses


// https://www.linkedin.com/jobs/view/3865997773/?refId=e2HAkfWqMmfx1IpfKnLO5A%3D%3D&trackingId=e2HAkfWqMmfx1IpfKnLO5A%3D%3D