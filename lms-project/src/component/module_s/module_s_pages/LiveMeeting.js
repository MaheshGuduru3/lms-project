import React from 'react'

const LiveMeeting = ({ id1 , id2}) => {
  return (
    <div className='w-full'>
         <div className='w-[25rem] shadow-lg min-h-[10rem] p-2 flex flex-col justify-evenly border'>
              <div className='text-lg font-light flex justify-between'>
                  <h4>{ id1 } / { id2}</h4>
                  <h4>LiveSession</h4>
              </div>
              <div className='text-md font-mono'>
                <h5>Topic:week1</h5>
              </div>
              <div>
                 <button className='bg-blue-500 p-1 px-3 text-white  rounded-lg font-mono'>Join</button>
              </div>
         </div>
    </div>
  )
}

export default LiveMeeting