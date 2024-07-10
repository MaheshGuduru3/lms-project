import React, { useEffect, useState } from 'react'
import { setToggle1 } from '../../../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { TiArrowRightThick , TiArrowLeftThick} from "react-icons/ti";
import { useParams } from 'react-router-dom';
import LiveMeeting from './LiveMeeting';
import RecordedVideo from './RecordedVideo';
import DayInfo from './DayInfo';
import { useGetCourseBatchNameQuery, useGetCourseBatchWeekWiseMutation } from '../../../features/batch/batchApi';

const AccessRight = () => {
    const dispatch = useDispatch()
    const { toggle1 , course } = useSelector(state=>state.userslice)
    const paras = useParams()
    const { data }  = useGetCourseBatchNameQuery(course?.data?.batch ? course?.data?.batch : null)
    const [ display , setDisplay ] = useState("LiveMeeting")
    const [weekwise] = useGetCourseBatchWeekWiseMutation()    
   
   
   
   
   
    useEffect(()=>{
       
    },[data,paras])

    if(!paras.id1 && !paras.id2){
         return <div>
           <h2>Welcome</h2>  
         </div>    
     }  
     

 

  return (
    <div className='w-full'>
        <div className='w-full flex gap-2 items-center p-2'>
               <div>
                <button onClick={()=> dispatch(setToggle1())} className='bg-blue-700  text-white text-xl  rounded-full p-2'>{ toggle1 ?   <TiArrowLeftThick />  :  <TiArrowRightThick  />}</button>
               </div>
               <div className='w-full'>
                    <div className='text-lg'>
                         <h5 className='font-light italic'>{paras.id1} / {paras.id2}</h5>
                    </div>
                    
               </div>
        </div>
        <div className='w-[90%] m-auto p-2 flex flex-col gap-5'>
         <button className='w-full flex  gap-5 border' data-text={true} onClick={(e)=> e.target.dataset.text ? null : setDisplay(e.target.innerText) }>
           <div className='w-[30%] text-lg'> 
            <h4 className={display == "LiveMeeting" ? 'font-extralight text-white bg-slate-500 h-auto p-2' : ' font-extralight'}>LiveMeeting</h4>
           </div>
           <div className='w-[30%] text-lg'>
              <h4 className={display == "RecordedVideo" ? 'w-full font-extralight text-white bg-slate-500 h-auto p-2' : ' font-extralight'}>RecordedVideo</h4>
            </div>
           <div className='w-[40%] text-lg'>
             <h4 className={display == "DayInfo" ? 'font-extralight text-white bg-slate-500 h-auto p-2' : ' font-extralight'}>DayInfo</h4>
           </div>                 
          </button>
        <div className='w-full'>
            {
                display == "LiveMeeting" && 
                <div className='w-full'>
                   <LiveMeeting id1={paras.id1} id2={paras.id2} />
                </div> 
            }
            { 
                display == "RecordedVideo" && 
                <div className='w-full'>
                     <RecordedVideo />
                  </div> 
            }
            { 
                display == "DayInfo" && 
                <div className='w-full'>
                    <DayInfo />
                </div>
            }
        </div>
        </div>
    </div>
  )
}

export default AccessRight