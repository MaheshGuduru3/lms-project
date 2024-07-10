import { createSlice } from "@reduxjs/toolkit";



const initialState = {
      User : [],
      toggle : true,
      toggle1: true,
      selectOpt : "mycourse",
      adminSide : "dashboard",
      course : []
}


const  userSlice  = createSlice({
      initialState , 
      name:'userslice',
      reducers: {
        setUser : ( state , action) => { 
            state.User = action.payload
         },
         setCourse : ( state , action) => {     
           state.course = action.payload
        },
         setToggle : (state ) => {
               state.toggle = !state.toggle
         },
         setToggle1 : (state ) => {
            state.toggle1 = !state.toggle1
      },
         setSelectOpt : (state , action) => {
               state.selectOpt = action.payload
         },
         setAdminSide : (state , action)=>{
              state.adminSide = action.payload
         }
      }
})

export const {  setUser , setToggle  , setSelectOpt , setToggle1 ,setCourse , setAdminSide}  = userSlice.actions

export default userSlice.reducer