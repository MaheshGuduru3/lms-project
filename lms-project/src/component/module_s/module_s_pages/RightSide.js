import React, { useEffect } from 'react'
import MyCourses from './MyCourses'
import { useDispatch, useSelector } from 'react-redux'
import Profile from './Profile'
import Settings from './Settings'
import AboutUs from './AboutUs'
import { useParams } from 'react-router-dom'
import { setSelectOpt, setToggle } from '../../../features/user/userSlice'
import { TiArrowRightThick , TiArrowLeftThick} from "react-icons/ti";

const RightSide = () => {
    const { selectOpt , toggle} = useSelector(state => state.userslice)
    const dispatch = useDispatch()



    const par = useParams()   

    
     useEffect(()=>{
        dispatch(setSelectOpt(par.id))      
    },[par.id,dispatch])  

  return (
    <div className='w-full'>
      <div className='w-full'>
      <div className='text-2xl text-center text-white w-10 m-1'>
      <button onClick={()=> dispatch(setToggle())} className='bg-blue-700  text-white text-xl  rounded-full p-2'>{ toggle ?   <TiArrowLeftThick />  :  <TiArrowRightThick  />}</button>
        </div>
       <div className='p-4'>
       {  selectOpt === "mycourse"  &&   <MyCourses /> }
        {  selectOpt === "profile"  &&   <Profile /> }
        {  selectOpt === "settings"  &&   <Settings /> }
        {  selectOpt === "aboutus"  &&   <AboutUs /> }
       </div>
      </div>
    </div>
  )
}

export default RightSide