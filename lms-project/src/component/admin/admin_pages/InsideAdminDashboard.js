import React from 'react'
import { Bar  , Pie } from 'react-chartjs-2'
import {  ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip, Chart as chartjs } from 'chart.js'
import { useGetUserCountQuery } from '../../../features/user/userApi'
import { useGetTotBatchEachCourseQuery, useGetTotStudEachCourseQuery } from '../../../features/batch/batchApi'
 

const InsideAdminDashboard = () => {
  
      const { data  } = useGetUserCountQuery()      
      const { data:stud }  = useGetTotStudEachCourseQuery()  
      const { data:batch } = useGetTotBatchEachCourseQuery()  
  
      console.log(data)          


   chartjs.register(
       CategoryScale,
       LinearScale,
       BarElement,
       Title,
       Tooltip,
       Legend,
       ArcElement
   )

   const allStud = [
         {
             fswd : stud?.data?.filter(({_id , totalCount})=>(
                       _id === "fullstackwebdeveloper" && totalCount
                  )),

                  ds : stud?.data?.filter(({_id , totalCount})=>(
                        _id === "datascience" && totalCount
                   )),
                   ml : stud?.data?.filter(({_id , totalCount})=>(
                        _id === "machinelearning" && totalCount
                   )),
                   dgm : stud?.data?.filter(({_id , totalCount})=>(
                        _id === "digitalmarketing" ? totalCount : 0
                   )),
                   java : stud?.data?.filter(({_id , totalCount})=>(
                        _id === "java" ? totalCount : 0
                   )),
                   python : stud?.data?.filter(({_id , totalCount})=>(
                        _id === "python" ? totalCount : 0
                   )),  
                    
               
         },
         {
             fswd : batch?.data?.filter(({ _id })=>(  
                       _id.course === "fullstackwebdeveloper"
                  )),

                  ds : batch?.data?.filter(({_id })=>( 
                        _id.course === "datascience" 
                   )),
                   ml : batch?.data?.filter(({_id })=>(
                        _id.course === "machinelearning" 
                   )),
                   dgm : batch?.data?.filter(({_id })=>(
                        _id.course === "digitalmarketing" 
                   )),
                   java : batch?.data?.filter(({_id })=>(
                        _id.course === "java"
                   )),
                   python : batch?.data?.filter(({_id })=>(
                        _id.course === "python"
                   )),  
                    
               
         }
   ]


   const barChartData = {
    labels : ["FSWD" , "DS" , "ML" , "DM" , "Java" , "Python"],
    datasets : [
             {
                label : "No. of Students in Each Courses",
                data : [allStud[0]?.fswd?.length >= 1 && allStud[0].fswd[0].totalCount,allStud[0]?.ds?.length >= 1 && allStud[0].ds[0].totalCount,allStud[0]?.ml?.length >= 1 && allStud[0]?.ml[0]?.totalCount,allStud[0]?.dgm?.length >= 1 && allStud[0]?.dgm[0]?.totalCount,allStud[0]?.java?.length >= 1 && allStud[0]?.java[0]?.totalCount, allStud[0]?.python?.length >= 1 && allStud[0]?.python[0]?.totalCount],
                backgroundColor : [
                  "rgba(142,125,146,0.5)",
                  "rgba(242,135,146,0.5)", 
                  "rgba(42,115,146,0.5)",
                  "rgba(2,125,146,0.5)",
                  "rgba(12,125,146,0.5)",
                  "rgba(1,125,146,0.5)"
                ]
             }
        ]
   } 
  
 const pieChartData = {
    labels : ["FSWD" , "DS" , "ML" , "DM" , "Java" , "Python"],
    datasets : [
         {
            label : "No. of Batches In Courses",
            data : [allStud[1]?.fswd?.length,allStud[1]?.ds?.length,allStud[1]?.ml?.length,allStud[1]?.dgm?.length,allStud[1]?.java?.length,allStud[1]?.python?.length],
            backgroundColor : [
                  "rgba(142,125,146,0.5)",
                  "rgba(242,135,146,0.5)",
                  "rgba(42,115,146,0.5)",
                  "rgba(2,125,146,0.5)",
                  "rgba(12,125,146,0.5)",
                  "rgba(1,125,146,0.5)"
                ]
         }
    ]
} 

  return (
    <div className='w-full flex flex-col gap-5'>
        <div className='w-full p-2'>
            <h3 className='text-2xl font-extralight m-2'>welcome to dashboard</h3>
            <div className='w-full flex flex-wrap gap-2'>
                  <div className='w-[15rem] shadow-lg text-center bg-white border p-4'>
                        <h3 className='text-lg font-bold italic'>
                           { data?.stdCount}
                        </h3>
                        <h6 className='text-lg font-extralight'>Total No. of Students</h6>
                  </div>
                  <div className='w-[15rem] shadow-lg text-center bg-white border p-4'>
                        <h3 className='text-lg font-bold italic'>6</h3>
                        <h6 className='text-lg font-extralight'>Total No. of Courses</h6>
                  </div>
                  <div className='w-[15rem] shadow-lg text-center bg-white border p-4'>
                        <h3 className='text-lg font-bold italic'>
                            { data?.adCount }
                        </h3>
                        <h6 className='text-lg font-extralight'>Total No. of Admins</h6>
                  </div>
              
              </div>
          </div>
          <div className='text-xl font-extralight '>
            <h3>Graphical representation of data</h3>
          </div>
          <div className='w-full flex justify-around cursor-pointer shadow-lg'>
             <div className='w-[40%] text-center'> 
                 
                  <Bar  data={barChartData} />
                   <h3 className='text-lg font-light'>No. Of Students In Each Courses</h3>
             </div>
             <div className='w-[22%] text-center'>
                  
                    <Pie  data={pieChartData} />
                   <h3 className='text-lg font-light'>No. of Batches In Courses</h3>
             </div>
            </div>
    </div>
  )
}

export default InsideAdminDashboard