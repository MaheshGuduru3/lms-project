import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './component/Home'
import Header from './component/header/Header'
import SignIn from './component/pages/SignIn'
import ForgotPassword from './component/pages/ForgotPassword'
import AllCourse from './component/pages/AllCourse'
import { ToastContainer } from 'react-toastify';
import Dashboard from './component/module_s/Dashboard'
import AccessCourses from './component/module_s/module_s_pages/AccessCourses'
import RightSide from './component/module_s/module_s_pages/RightSide'
import AccessRight from './component/module_s/module_s_pages/AccessRight'
import AdminDashboard from './component/admin/AdminDashboard'
import AdminRight from './component/admin/admin_pages/AdminRight'

const App = () => {

  return (
    <div className='w-full'>
      <BrowserRouter>
        <Routes>
           <Route  path='/signin'  element={<SignIn />}  />
           <Route  path='/forgotpassword' element={<ForgotPassword /> }/>
           <Route exact path='/' element={<Header />}>
                   <Route  path='/'  element={<Home />} />
                   <Route  path='/courses' element={<AllCourse />}/>
                   <Route  path='/dashboard' element={<Dashboard />} >
                      <Route exact path='/dashboard/:id'  element={<RightSide />} />                         
                   </Route>   
                   <Route  path='/dashboard/mycourse/access' element={<AccessCourses />} > 
                        <Route  path='/dashboard/mycourse/access/:id1/:id2' element={<AccessRight />} />
                   </Route>
                   <Route path='/admin' element={<AdminDashboard/>} >
                       <Route  path='/admin/:name' element={<AdminRight />} />
                    </Route>
           </Route> 
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App                                                                                                                                                                                                                                          