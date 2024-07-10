import { apiSlice } from '../api/apiSlice'



const courseApi =  apiSlice.injectEndpoints({
       endpoints : builders =>({
           
            getOneCourseUser : builders.query({
                  query : (email)=>({
                       url : `/course/${email}`,
                       method:'GET'
                  }),
                  providesTags:['Course']
            }),

            getUserCourseRegister : builders.mutation({
                  query  : (data)=>({
                       url :"/course",
                       method:"POST",
                       body:data
                  }),
                  invalidatesTags:['Course']
            })

       })
})


export const {  
               useGetOneCourseUserQuery ,
               useGetUserCourseRegisterMutation,


             } = courseApi

export default courseApi