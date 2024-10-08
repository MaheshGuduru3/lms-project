import {  createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
      reducerPath:'api',
      baseQuery : fetchBaseQuery({
         baseUrl : 'http://localhost:3301/api',
         credentials:'include'
      }),
      tagTypes:['User','Batch','Course'],
      endpoints : (builders) => ({}) 
})