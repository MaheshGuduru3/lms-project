import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const FrequentQues = () => {

 const [freToggle , setFreToggle] = useState()



  const arrFreq = [

        
    {
         id : 0,
         question : " What is an LMS portal and how does it work?",
         answer : "An LMS (Learning Management System) portal is an online platform designed to facilitate learning and training. It allows users to access courses, materials, assessments, and communication tools in one centralized location. Users can log in, enroll in courses, track their progress, and interact with instructors and peers through the portal."
    },
    {
      id : 1,
      question : "How do I log in to the LMS portal?",
      answer : "To log in to the LMS portal, you typically need to enter your username and password provided by your institution or organization. Some portals also offer single sign-on options for seamless access."
    },
    {
       id : 2,
       question : "What courses are available on the LMS portal?",
       answer : "The available courses vary depending on the institution or organization offering the LMS portal. Common courses include academic subjects, professional development, compliance training, and skill-based courses."
    },
    {
       id : 3,
       question : "How do I enroll in a course?",
       answer  : "To enroll in a course, navigate to the course catalog or search for the desired course within the LMS portal. Then, click on the course title and follow the prompts to enroll. Some courses may require approval from an administrator or instructor before enrollment."
    },
    {
       id  : 4,
       question : "Can I access the LMS portal from any device?",
       answer : "Many LMS portals are accessible from desktop computers, laptops, tablets, and smartphones. They are often designed responsively to adapt to different screen sizes and devices, allowing users to learn on the go."
    }

  ]

  return (
    <div className='w-full'>
          <div className='max-w-[96rem] m-auto'>
               <div className='w-full'>
                     <div className='w-full'>
                        <div className='w-full text-center h-[5rem]'>
                          <h3 className='text-3xl font-semibold italic'>Frequently Asked Questions</h3>
                      </div>
                     </div>
                     <div className='w-full md:w-[40rem] min-h-[20rem] m-auto flex flex-col gap-2 p-2'>
                          {
                             arrFreq.map((i,index)=>(
                             
                             <div className='w-full' key={index}>
                                  <button className='w-full bg-white shadow-lg flex justify-between p-3 items-center' data-num={index} onClick={(e)=> {setFreToggle(e.target.dataset.num); console.log(e)}}>
                                    <h4 className='text-lg' data-num={index}>{i.question}</h4>
                                    <h6 className='text-2xl'> { parseInt(freToggle) === index ? <FiMinus data-num={index} />  : <GoPlus data-num={index} /> }</h6>
                                  </button>
                                  <div className={ parseInt(freToggle)  === index ? 'bg-white min-h-[2rem] p-3 shadow-lg mt-1':'hidden'}>
                                  <p className='font-light text-md'>{i.answer}</p>
                                  </div>
                             </div>
                             ))
                           }
                     
                     </div>
               </div>
          </div>
    </div>
  )
}

export default FrequentQues