import { apiSlice }  from   "../api/apiSlice"


const userApi = apiSlice.injectEndpoints({
      endpoints : builders => ({
            getHealthCheck : builders.query({
                  query : ()=>({
                       url : '/health'
                  })
            }),

            getUserSignIn : builders.mutation({
                query : (data)=>({
                    url:'/users',
                    method:'POST',
                    body : data
                }),
                invalidatesTags:['User']
            }),

            getUserDetails  : builders.query({
                  query : ()=>({
                     url : '/user',
                     method:'GET'
                  }),
                  providesTags:['User']
            }),

            LogOutUser : builders.mutation({
                 query : ()=>({
                     url : "/logout",
                     method: 'POST'
                 }),
                 invalidatesTags:['User']
            }),

            getRegisterUser : builders.mutation({
                   query : (data)=>({
                       url : '/user',
                       method:'POST',
                       body:data
                   }),
                   invalidatesTags:['User']
            }),

            getUserCount : builders.query({
                   query : ()=>({
                       url : "/user/count",
                       method :"GET"
                   }),
                   providesTags:['User']
            })
      })
}) 


export const  {  useGetHealthCheckQuery ,
                 useGetUserSignInMutation ,
                 useGetUserDetailsQuery , 
                 useLogOutUserMutation ,
                 useGetRegisterUserMutation,
                 useGetUserCountQuery
              } = userApi



export default userApi   