import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { navbarList } from '../Modules/Header'

const PageRoutes = () => {
  return (
     <Routes>
        {navbarList.map(item => <Route key={item.id} path={item.path} element={item.element}/>)}
     </Routes>
  )
}

export default PageRoutes
