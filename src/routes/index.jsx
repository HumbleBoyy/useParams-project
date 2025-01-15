import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Auth, Home, SingleUser, Users } from '../pages'

const PageRoutes = () => {
    const routeList = [
        {
          id:1,
          path:"/",
          element:<Home/>
        },
        {
          id:2,
          path:"/users",
          element:<Users/>
        },
        {
          id:3,
          path:"/auth",
          element:<Auth/>
        },
        {
            id:4,
            path:"/users/:id",
            element:<SingleUser/>
        },
      ]
  return (
     <Routes>
        {routeList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
     </Routes>
  )
}

export default PageRoutes
