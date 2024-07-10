import { apiSlice  } from '../api/apiSlice'


const batchApi = apiSlice.injectEndpoints({
      endpoints: builders => ({
            getCourseBatchName : builders.query({
                  query : (batch)=>({
                      url : `/batch/${batch}`,
                      method : "GET"
                  }),
                  providesTags:['Batch']
            }) ,
            getCourseBatchWeekWise : builders.mutation({
                  query :(data)=>({  
                    url:`/batch/weekwise`,
                    method:'POST',
                    body:data
                  }),
                  invalidatesTags:['Batch']
            }),

            addBatchandCourse : builders.mutation({
                  query : (data)=>({
                          url :"/batch",
                          method:'POST',
                          body:data
                  }),
                  invalidatesTags:['Batch']
            }),

            addWeekwiseCourseBatchAdmin : builders.mutation({
                    query: ({ batch , coursename , data1 })=>({
                        url : `/batch/weekwise/adm/${batch}/${coursename}`,
                        method:'PATCH',
                        body:data1
                    }) ,
                    invalidatesTags:['Batch'] 
            }),
            
            getAllbatchs: builders.query({
                  query: () =>  ({
                         url:'/batch',
                         method:'GET'
                  }),
                 providesTags:['Batch']
            }),

            getWeekwiseSchedule : builders.mutation({
                   query : (data)=>({
                      url : '/batch/adm/schedule',
                      method:"POST",
                      body:data
                   }),
                   invalidatesTags:['Batch']
            }),

            getTotStudEachCourse  : builders.query({
                     query : ()=>({
                         url : '/batch/course/count',
                         method : "GET"
                     }),
                     providesTags:['Batch']
            }),
            getTotBatchEachCourse : builders.query({
                    query : ()=>({
                         url : "/batch/batchs/count",
                         method:"GET"
                    }),
                    providesTags:['Batch']
            }),
            getBatchUpdatesLink : builders.mutation({
                  query  : ({data , batch , coursename , weeksubno})=>({
                        url : `/batch/${batch}/${coursename}/${weeksubno}`,
                        method:'PATCH',
                        body:{ data }
                  }),
                  invalidatesTags:['Batch']
            })
      })
})   


export const { useGetCourseBatchNameQuery ,
               useGetCourseBatchWeekWiseMutation , 
               useAddBatchandCourseMutation ,
               useAddWeekwiseCourseBatchAdminMutation,
               useGetAllbatchsQuery,
               useGetWeekwiseScheduleMutation,
               useGetTotStudEachCourseQuery,
               useGetTotBatchEachCourseQuery,
               useGetBatchUpdatesLinkMutation
            
            
             } = batchApi


export default batchApi