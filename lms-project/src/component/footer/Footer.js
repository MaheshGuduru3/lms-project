import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='w-full'>
             <div className='max-w-[96rem] m-auto'>
                  <div className='w-full min-h-[22rem] bg-slate-300 flex flex-col justify-between'>
                       <div className='w-full flex  flex-col items-center gap-2 md:gap-0 md:items-start md:flex-row justify-evenly p-4'>
                           <div className='text-2xl font-semibold'>
                              <h3>LMS PORTAL</h3>
                            </div>   
                            <div className='flex flex-col gap-2'>
                                <h5 className='text-xl font-semibold'>Courses</h5>
                                <div className='flex flex-col gap-1'>
                                    <h6 className='font-light hover:text-blue-500 cursor-pointer'>Full stack developer</h6>
                                    <h6 className='font-light hover:text-blue-500 cursor-pointer'>Data Science</h6>
                                    <h6 className='font-light hover:text-blue-500 cursor-pointer'>AI/ML</h6>
                                    <h6 className='font-light hover:text-blue-500 cursor-pointer'>Python</h6>
                                    <h6 className='font-light hover:text-blue-500 cursor-pointer'>Digital Marketing</h6>
                                    <h6 className='font-light hover:text-blue-500 cursor-pointer'>Java</h6>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                               
                                    <h3 className='text-xl font-semibold'>About Us</h3>
                                    {/* <p>EduVantage Learning Solutions specializes in providing personalized online learning experiences for K-12 students. Their platform employs adaptive learning  curriculum content to each student's individual learning style and pace. They offer a comprehensive suite of interactive lessons, assessments, and progress tracking tools to help students excel academically.</p> */}
                                     <p className='font-light'>lms portal , marathahalli , bangalore , 510021</p>
                              
                              
                            </div>
                       </div>
                       <div className='flex flex-col items-center'>
                            <div className='text-2xl font-semibold'>
                             <h3>Follows Us</h3>
                            </div>
                            <div className='flex p-2 gap-3'>
                              <NavLink to='/'><FaInstagram /></NavLink>
                               <NavLink to='/'><FaLinkedinIn /></NavLink>
                               <NavLink to='/'><FaTwitter /></NavLink>
                            </div>
                       </div>
                  </div>
             </div>
    </div>
  )
}

export default Footer    