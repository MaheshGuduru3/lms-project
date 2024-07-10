import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp , } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const AccessLeft = () => {

     
  const [ week ,setWeek] = useState(0)
  
  return (
    <div className='w-full'>
         <div className='w-full min-h-[90.5vh] shadow-lg'> 
            <div className='flex flex-col p-2'>
                 { 
                     [...Array(8)].map((i , index)=>(  
                        <div  key={index}>
                            <button  data-num={index+1}  onClick={(e)=>{
                                 
                                 e.target.dataset.num === week ? setWeek(0) :

                                setWeek(e.target.dataset.num)
                                    
                                }} className='w-full text-lg font-light flex justify-evenly items-center p-1'>
                                <h3 data-num={index+1}>Week {index + 1}</h3>
                                <h3>{  parseInt(week) === index + 1  ?  <MdOutlineKeyboardArrowUp data-num={index+1} />  :<MdOutlineKeyboardArrowDown data-num={index+1} />}</h3> 
                            </button>
                            <div className={ parseInt(week) === index + 1 ? 'min-h-14 text-md font-light flex flex-col items-center gap-1 ' : 'h-0  hidden'}>
                                <NavLink to={`/dashboard/mycourse/access/week${index + 1}/week${index+1}.1`}>week {index+1}.1</NavLink>
                                <NavLink to={`/dashboard/mycourse/access/week${index + 1}/week${index+1}.2`}>week {index+1}.2</NavLink>
                            </div>
                        </div>
                     ))  
                 }
            </div> 
         </div>
    </div>
  )
}

export default AccessLeft 