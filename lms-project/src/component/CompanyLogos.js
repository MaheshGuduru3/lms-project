import React from 'react'
import log1 from '../assests/log2.jpg'
import log2 from '../assests/log1.jpg'
import log3 from '../assests/log3.jpg'
import ama from '../assests/Amazon-Logo.png'
import Marquee from "react-fast-marquee";

const CompanyLogos = () => {

   const imgArr = [
       
    {
       id: 1,
       img : log1,
    },
    {
      id: 2,
      img : log2,
   },
   {
    id: 3,
    img : log3,
 },
 {
  id: 4,
  img : ama,
},

   ]
  

  return (
    <div className='w-full'>
         <div className='max-w-[96rem] m-auto'>
           <div className='w-full'>
                <div className='w-[80%] md:w-[50%]  m-auto flex flex-col gap-6'>
                     <div className='text-center'>
                        <h4 className='text-3xl font-semibold italic p-2'>Our Clients</h4>
                     </div>
                     <Marquee pauseOnHover style={{ mixBlendMode:'multiply' }}>
                        <div className='w-full flex gap-4'>
                                {
                                   imgArr.map((i,index)=>(
                                    <img className='w-20 h-20 mix-blend-multiply' key={index} src={i.img}  alt='company-logos' /> 
                                   ))
                                }                            
                          </div>
                          <div className='w-full flex gap-4'>
                                {
                                   imgArr.map((i,index)=>(
                                    <img className='w-20 h-20 mix-blend-multiply' key={index} src={i.img}  alt='company-logos' /> 
                                   ))
                                }                            
                          </div>
                     
                     </Marquee>
                 
                     <Marquee pauseOnHover direction='right' style={{ mixBlendMode:'multiply' }}>
                        <div className='w-full flex gap-4'>
                                {
                                   imgArr.map((i,index)=>(
                                    <img className='w-20 h-20 mix-blend-multiply'  key={index} src={i.img}  alt='company-logos' /> 
                                   ))
                                }                            
                          </div>
                          <div className='w-full flex gap-4'>
                                {
                                   imgArr.map((i,index)=>(
                                    <img className='w-20 h-20 mix-blend-multiply' key={index}  src={i.img}  alt='company-logos' /> 
                                   ))
                                }                            
                          </div>
                     
                     </Marquee>
   
                </div>
           </div>
         </div> 
    </div>
  )
}

export default CompanyLogos