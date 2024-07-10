import React from 'react'

const RecordedVideo = () => {
  return ( 
    <div className='w-full'>
        <div className='w-[70%] m-auto'>   
               <div className='w-full'>
                  <video controls  controlsList="nodownload" className='w-full h-[30rem]'>
                     <source src='https://firebasestorage.googleapis.com/v0/b/mern-intern.appspot.com/o/videos%2FRecording%202024-03-18%20061846.mp4?alt=media&token=29ffc809-adb6-40d6-a567-b4ef3fa42010' type='video/mp4'></source>
                  </video>
               </div>
        </div>
    </div>
  )
}

export default RecordedVideo