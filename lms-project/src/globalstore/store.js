import { configureStore , getDefaultMiddleware } from '@reduxjs/toolkit'  
import { apiSlice } from '../features/api/apiSlice'
import usersliceReducer from '../features/user/userSlice'

export const store = configureStore({  
      reducer: {
          [apiSlice.reducerPath] : apiSlice.reducer  ,
          userslice : usersliceReducer
      },

      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})