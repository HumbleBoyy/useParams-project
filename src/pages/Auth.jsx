import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState("/auth")

  const changesNestedPath = (path) => {
    navigate(path)
    setIsActive(path)
  }
  return (
    <div className='flex flex-col'>
      <ul className='flex flex-col block mx-auto  items-center gap-4 mt-2 p-2 w-[500px] h-[300px] bg-blue-500 rounded-md'>
        <div className='flex gap-5'>
        <li onClick={() => changesNestedPath("/auth")} className={`${isActive === "/auth" && "border-b-white"} border-b-2 text-xl font-bold text-white border-b-transparent  cursor-pointer`}>Login</li>
        <li onClick={() => changesNestedPath("register")}  className={`${isActive === "register" && "border-b-white"} border-b-2 text-xl font-bold text-white border-b-transparent  cursor-pointer`}>Sign up</li>
        </div>
        <div className='p-10'>
         <Outlet/>
      </div>
      </ul>
    </div>
  )
}

export default Auth
