import React, { useState } from 'react'
import { PiStarThin } from "react-icons/pi";
import CountUp from 'react-countup' 
import ScrollTrigger from 'react-scroll-trigger';
import { PiStudentThin } from "react-icons/pi";
import { PiBookOpenThin } from "react-icons/pi";

const Featuring = () => {

  const [scroll , setScroll] = useState(false)

  return (
    <div className='w-full'>
        <div className='max-w-[96rem] m-auto'>
            <ScrollTrigger onEnter={()=>setScroll(true)} onExit={()=>setScroll(false)}>
             <div className=' w-[80%] m-auto md:w-full h-[30rem] md:h-[15rem] flex items-center'>
                 
                  <div className='w-[63rem] m-auto rounded-lg bg-slate-900 p-5 text-white flex flex-col gap-3 md:gap-0 md:flex-row justify-evenly hover:scale-105'>
                        <div className='h-[7rem] flex flex-col items-center justify-center'>
                            <p className='text-4xl'><PiStudentThin /></p>  
                            <h4 className='text-2xl font-semibold'>No. Of Students</h4>
                            <h6 className='text-xl font-bold text-amber-500'>{scroll && <CountUp start={1} end={4000} duration={2} />}+</h6>
                        </div>
                        <div className='border'></div>
                        <div className='h-[7rem] flex flex-col items-center justify-center'>
                            <p className='text-4xl'><PiBookOpenThin  /></p>
                            <h4 className='text-2xl font-semibold'>No. Of Courses</h4>
                            <h6  className='text-xl font-bold text-amber-500'>{scroll && <CountUp start={1} end={6} duration={2} />}+</h6>
                        </div>
                        <div className='border'></div>
                        <div className='h-[7rem] flex flex-col items-center justify-center'>
                            <p className='text-4xl'><PiStarThin  /></p>
                            <h4 className='text-2xl font-semibold'>No. Of Ratings</h4>
                            <h6  className='font-bold text-xl text-amber-500'>{scroll && <CountUp start={1} end={5} duration={2} />}+</h6>
                        </div>
                  </div> 
             </div>
            </ScrollTrigger>
        </div>
    </div>
  )
}

export default Featuring