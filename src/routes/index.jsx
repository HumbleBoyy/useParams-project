import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth, Home, Login, Register, SingleUser, Users } from '../pages'

const PageRoutes = () => {
    // const routeList = [
    //     {
    //       id:1,
    //       path:"/",
    //       element:<Home/>
    //     },
    //     {
    //       id:2,
    //       path:"/users",
    //       element:<Users/>
    //     },
    //     {
    //       id:3,
    //       path:"/auth",
    //       element:<Auth/>
    //     },
    //     {
    //         id:4,
    //         path:"/users/:id",
    //         element:<SingleUser/>
    //     },
    //   ]
  return (
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<SingleUser/>}/>
        <Route path='/auth' element={<Auth/>}>
          <Route path='/auth/login' element={<Login/>}/>
          <Route path='/auth/register' element={<Register/>}/>
        </Route>
     </Routes>
  )
}

export default PageRoutes
