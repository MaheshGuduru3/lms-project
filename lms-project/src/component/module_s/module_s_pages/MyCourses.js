import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const MyCourses = () => {
 const { course } = useSelector(state => state.userslice)
 console.log(course)  

  return (
    <div className='w-full'>
        <div className='w-full'>
            <div className='w-[90%] m-auto flex flex-col gap-5'>
               <h3 className='text-xl font-semibold'>My Course</h3>
               <div>
               <div className='w-[20rem] min-h-[17rem] shadow-lg border p-2 hover:scale-90 hover:transition-all'>
                                    <NavLink  to={`/dashboard/mycourse/access`}>
                                    <img  src='https://c8.alamy.com/comp/W3XFX2/full-stack-developer-with-digital-java-code-text-full-stack-developer-and-computer-software-coding-vector-concept-programming-coding-script-java-di-W3XFX2.jpg'  alt='courses-images' className='w-[20rem]' loading='lazy' />
                                    </NavLink>
                                    <div className=''>
                                    <h5 className='text-xl font-light'>{course?.data?.coursename}</h5>
                                    <h5 className='text-sm font-light'>{course?.data?.batch}</h5>
                                    <h5 className=''>{course?.data?.performance.length / 2 === 8 ?"Completed":"InProgress"}</h5>
                                    </div>
                     </div>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default MyCourses