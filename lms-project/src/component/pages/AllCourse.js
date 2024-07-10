import React from 'react'
import { RxStarFilled } from "react-icons/rx";
import { NavLink } from 'react-router-dom'
import { BiRupee } from "react-icons/bi";

const AllCourse = () => {

    const arrCourse = [
        {
            id : 1,
            img : 'https://c8.alamy.com/comp/W3XFX2/full-stack-developer-with-digital-java-code-text-full-stack-developer-and-computer-software-coding-vector-concept-programming-coding-script-java-di-W3XFX2.jpg',
            ratings : 5,
            CourseName : "Full Stack Web Developer",
            cost : 14000
         },
         {
             id : 2,
             img : 'https://c8.alamy.com/comp/W3XFX2/full-stack-developer-with-digital-java-code-text-full-stack-developer-and-computer-software-coding-vector-concept-programming-coding-script-java-di-W3XFX2.jpg',
             ratings : 5,
             CourseName : "Full Stack Web Developer",
             cost : 14000
          },
          {
             id : 3,
             img : 'https://c8.alamy.com/comp/W3XFX2/full-stack-developer-with-digital-java-code-text-full-stack-developer-and-computer-software-coding-vector-concept-programming-coding-script-java-di-W3XFX2.jpg',
             ratings : 5,
             CourseName : "Full Stack Web Developer",
             cost : 14000
          },
          {
            id : 4,
            img : 'https://c8.alamy.com/comp/W3XFX2/full-stack-developer-with-digital-java-code-text-full-stack-developer-and-computer-software-coding-vector-concept-programming-coding-script-java-di-W3XFX2.jpg',
            ratings : 5,
            CourseName : "Full Stack Web Developer",
            cost : 14000
         },
         {
             id : 5,
             img : 'https://c8.alamy.com/comp/W3XFX2/full-stack-developer-with-digital-java-code-text-full-stack-developer-and-computer-software-coding-vector-concept-programming-coding-script-java-di-W3XFX2.jpg',
             ratings : 5,
             CourseName : "Full Stack Web Developer",
             cost : 14000
          },
          {
             id : 6,
             img : 'https://c8.alamy.com/comp/W3XFX2/full-stack-developer-with-digital-java-code-text-full-stack-developer-and-computer-software-coding-vector-concept-programming-coding-script-java-di-W3XFX2.jpg',
             ratings : 5,
             CourseName : "Full Stack Web Developer",
             cost : 14000
          },
    ]




  return (
    <div className='w-full'>
          <div className='max-w-[96rem] m-auto'>
               <div className='w-full'> 
               <div className='w-full lg:w-[63rem] m-auto p-2'>
                         <h3 className='text-3xl font-semibold italic p-4'>All Courses</h3>
                     </div>

                     <div className='w-full'>
                     <div className='w-full lg:w-[63rem] min-h-[20rem] lg:min-h-[22rem] m-auto p-1 flex justify-evenly gap-4 lg:gap-0 lg:justify-between flex-wrap'> 
                        {
                              arrCourse.map((i , ind)=>(
                                <div className='w-[20rem] min-h-[20rem] shadow-lg border p-2 hover:scale-90 hover:transition-all' key={ind}>
                                    <NavLink>
                                    <img  src={arrCourse[0].img}  alt='courses-images' className='w-[20rem]' loading='lazy' />
                                    </NavLink>
                                    <div className='flex flex-col gap-1'>
                                    <h5 className='text-xl font-semibold'>Full Stack Web Developer</h5>
                                    <div className='flex justify-between'>
                                    <div className='flex items-center'>
                                    {
                                            [...Array(arrCourse[0].ratings)].map((i, index)=>(
                                            <h6 className='text-lg' key={index}><RxStarFilled className='text-amber-500' /> </h6>
                                            ))
                                    }
                                    <h6 className='text-lg font-thin ml-2'>5.0</h6>
                                    </div>
                                    <h6 className='text-lg font-light'>Ratings</h6>
                                    </div> 
                                    <div className=''>
                                        <h4 className='line-through text-sm'>18000</h4>
                                    <h6 className='font-medium'><BiRupee className='inline-block' />14000</h6>
                                    </div>
                                    </div>
                                </div>
                              ))
                        }  
                     </div>
                     </div>
               </div>
          </div>
    </div>
  )
}

export default AllCourse