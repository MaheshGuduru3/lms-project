import React from 'react'
import { PiBookLight } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiInfoLight } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectOpt } from '../../../features/user/userSlice';
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

const LeftSide = () => {

    const { selectOpt } = useSelector(state => state.userslice)
    const dispatch = useDispatch()
    const arrLeft = [ 
          {
              id : 1, 
              icon : <PiBookLight className='text-2xl' />,
              name : "Course",
              link : "mycourse"
          },
          {
             id : 2,
             icon : <HiOutlineUserCircle  className='text-2xl' />,
             name : "Profile",
             link : "profile"
          },
          {
             id : 3,
             icon : <GiSettingsKnobs className='text-2xl'/>,
             name : "Setting",
             link : "settings"
          },
          {
             id : 4,
             icon : <PiInfoLight className='text-2xl'/>,
             name : "AboutUs",
             link : "aboutus"
          }
    ]



   
  return (
    <div className='w-full min-h-[90.5vh] shadow-xl'>
         <div className='w-full'>
            <div className='w-full flex flex-col items-center p-2 gap-2'>
              {
                 arrLeft.map((i,index)=>(
                    <NavLink to={`/dashboard/${i.link}`}  className={i.link === selectOpt ? 'w-full  flex justify-center items-center p-2 gap-2 bg-blue-500 text-white rounded-sm' : 'w-full  flex justify-center items-center p-2 gap-2'} key={index} onClick={(e)=>dispatch(setSelectOpt(e.target.innerText))}>
                        <button className='cursor-not-allowed' disabled> {i.icon} </button>
                        <h3 className='text-lg font-light w-[8rem]'>{i.name}</h3>
                    </NavLink>
                 ))
             }
            </div>
            
      
              

         </div>
    </div>
  )
}

export default LeftSide