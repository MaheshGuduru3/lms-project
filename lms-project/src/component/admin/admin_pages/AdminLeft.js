import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import { PiUserCircleLight } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux'
import { setAdminSide } from '../../../features/user/userSlice';
import { MdSchedule } from "react-icons/md";

const AdminLeft = () => {
    
    console.log("adminleft")

   const { adminSide } = useSelector(state => state.userslice)
   const dispatch = useDispatch()

    const adminArr = [
          {
             id:0,
             icon : <RxDashboard />,
             name : "dashboard"
          },
          {
            id:1,
            icon : <PiUserCircleLight />,
            name : "user"
         },
         {
            id:2,
            icon : <GoBook />,
            name : "course"
         },
         {
            id:3,
            icon : <HiOutlineUserGroup />,
            name : "batch"
         },
         {
            id: 4,
            icon :  <MdSchedule />,
            name : "schedule"
         }
    ]

  return (
    <div className='w-full'>
       <div className='w-full min-h-screen  shadow-lg'>
          <div className='w-full p-4 flex flex-col gap-2' onClick={(e)=>dispatch(setAdminSide(e.target.innerText))}>
             {
                adminArr.map((i,index)=>(
                    <NavLink to={`/admin/${i.name.toLocaleLowerCase()}`} key={index} className={ adminSide === i.name ? 'flex items-center text-lg font-extralight p-1 text-white gap-2 bg-blue-500' :'flex items-center text-lg p-1 font-extralight gap-2'}>
                        <button className='' disabled>{i.icon}</button>
                        <button>{i.name}</button>
                    </NavLink>
                ))
             }
          </div>
       </div>
    </div>
  )
}

export default AdminLeft