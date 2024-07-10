import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useGetBatchUpdatesLinkMutation, useGetWeekwiseScheduleMutation } from '../../../features/batch/batchApi'
import { toast } from 'react-toastify'

const AdminSchedule = (data) => {
    const [weekschedule , { data:data1 }] = useGetWeekwiseScheduleMutation()

    const [upload , setUpload] = useState(" ")
    const [zoom, setZoom] = useState(false) 

    const [link , setLink ] = useState('')
    const [week ,setWeek] = useState('')

   const [uploadLink] = useGetBatchUpdatesLinkMutation()

    const { values , handleChange,handleSubmit } = useFormik({
          initialValues:{
             batch : "",
             coursename : ""
          },
          onSubmit:async(data)=>{
              try{
                   const result = await weekschedule(data).unwrap()
                   if(result){
                       toast.success(result.message)
                   }
              }   
              catch(err){
            
                if(err.status === 403){
                    return toast.error(err.data.message)
                 }
                 if(err.status === 404){
                    return toast.error(err.data.message)
                 }
                 if(err.status === 499){
                    return toast.error(err.data.message)
                 }
                 if(err.status === 500){
                    return toast.error(err.status)
                 }

                 return toast.error(err)
              }
          }
    })
   
    
   const uploadLinkHandler = (e, weeksubno)=>{
      setUpload(e.target.innerText)
      setZoom(true)
      setWeek(weeksubno)
   }
  
   console.log(link , "link")

   const finalUploadHandler = async (e)=>{  
         e.preventDefault()
          console.log("entered")
           
          let data = link

         //  if(link.type === 'video/mp4'){
         //    data = {
         //      recvideolink : link, 
         //    }
         //  }
         //  else{
         //    data = {
         //       zoomlink : link, 
         //    }
         //  }
          
          
           
          
         //  setZoom(false); setUpload(" ")
        
         console.log(data)
         const batch = data1?.data?.batch
         const coursename = data1?.data?.coursename
         const weeksubno = week
         try{
                const result = await uploadLink({data , batch , coursename , weeksubno}).unwrap()
                console.log(result)
         }
         catch(err){
           console.log(err)
         }
         finally {
            setZoom(false)
            setUpload(" ")
            setLink(" ")
         }
   }


  return (  
    <div className='w-full flex flex-col gap-10'>
        <div className='w-[90%] m-auto'>
             <h4 className='text-lg font-extralight p-2'>Live Classes Schedule for All Batch</h4>        
             <form className='shadow-lg flex flex-col gap-2 p-3' onSubmit={handleSubmit}>  
                     <div className='flex flex-wrap gap-2'>
                     <div className='flex flex-col flex-1'>
                           <label className='text-lg p-1'>Batch</label>
                           <select className='form-select rounded-lg' name='batch' value={values.batch} onChange={handleChange}>
                              <option value=""  disabled selected>Select batch</option>
                              {
                                 data?.data?.data?.map((i,ind)=>(
                                    <option value={i.batch} key={ind} >{i.batch}</option>
                                 ))
                              }
                            </select>  
                      </div>
                     <div className='flex flex-col flex-1'>
                           <label className='text-lg p-1'>Coursename</label>
                          <select className='form-select rounded-lg' name='coursename' value={values.coursename} onChange={handleChange}>
                              <option value=""  disabled selected>Select Course</option>
                              <option value="fullstackwebdeveloper">Full Stack Web Developer</option>
                              <option value="datascience">Data Science</option>
                              <option value="machinelearning">Machine Learning</option>
                              <option value="digitalmarketing">Digital Marketing</option>
                              <option value="java">Java</option>
                              <option value="python">Python</option>
                          </select>
                       </div>
                       </div>  
                       <button className='bg-blue-500 p-1 px-3 font-light text-white'>Submit</button>
                </form>
             
        </div>
        <div className='w-[90%] flex flex-col gap-5 relative'>
             <div className='font-extralight text-lg p-1'>
                <h3>Scheduled session and Update zoom and recvideo Link</h3>
             </div>
            <div className='flex flex-col gap-4'>
               <div>
               <h3>Batch : {data1?.data?.batch}</h3>
                <h3>coursename:{data1?.data?.coursename}</h3>
               </div>
                <table className='w-full text-center font-light border'>
                    <thead className='h-10'>
                        <th>Week</th>
                        <th>TopicName</th>
                        <th>Instructorname</th>
                        <th>Zoomlink</th>
                        <th>RecVideolink</th>
                        <th>Status</th>    
                    </thead>
                      {
                         data1?.data?.weekwise.map((i,ind)=>(
                            <tr className='border h-14' key={ind}>
                                <td>{i.weeksubno}</td>
                                <td>{i.topicname}</td>
                                <td>{i.instructorname}</td>
                                <td>{i.zoomlink === 'No link' ? <button className=' bg-neutral-300 p-1 px-2 text-white' onClick={ (e) => uploadLinkHandler(e , i.weeksubno)}>zoomlink</button> : <h4>Uploaded</h4>}</td>
                                <td>{i.recvideolink === 'No video' && <button className='bg-neutral-300 p-1 px-2 text-white' onClick={(e) => uploadLinkHandler(e , i.weeksubno) }>recvideolink</button>}</td>
                                <td>{i.status}</td>
                            </tr>
                         ))
                      }
                </table>
            </div>

            {
                upload === "zoomlink" || "recvideolink" && zoom  ?
                <div className='w-full bg-white absolute flex justify-center'>
                     <div className='w-[20rem] shadow-lg p-4'>
                        <h3 className='text-lg font-extralight p-2'>{upload} upload</h3>
                        <form className='flex flex-col gap-4' onSubmit={(e)=>finalUploadHandler(e)}> 
                             <div className='flex flex-col'>
                               <label>Batch</label>
                               <input type='text' placeholder='Enter Batch' name='batch' value={data1?.data?.batch}  readOnly/>
                             </div>
                             <div className='flex flex-col'>
                               <label>Coursename</label>
                               <input type='text' placeholder='Enter Coursename' name='coursename' value={data1?.data?.coursename} readOnly />
                             </div>
                             <div className='flex flex-col'>
                               <label>Weeksubno</label>
                               <input type='text' placeholder='Enter Weeksubno'  name='weeksubno' value={week} readOnly/>
                             </div>
                             { upload === "zoomlink" ?  
                             <div className='flex flex-col'>
                               <label>{upload}</label>
                               <input type='text' placeholder='Enter Zoom link' name='zoomlink' onChange={(e)=>setLink(e.target.value)} />
                             </div>
                            :
                            <div>
                                <label>{upload}</label>
                                <input type='file' onChange={(e)=> setLink(e.target.files[0])} />
                              </div>
                            } 
                             <button className={link ?'bg-blue-500 p-1 px-3 text-white font-extralight italic':'hidden bg-blue-500 p-1 px-3 text-white font-extralight italic'}>Upload</button>
                        </form>
                     </div>
                </div>
                :
                <></>
            }
        </div>
    </div>
  )
}

export default AdminSchedule