import { NavLink } from 'react-router-dom'
import { Auth, Home, Users } from '../pages'


export const navbarList = [
  {
    id:1,
    title:"Home",
    path:"/",
    element:<Home/>
  },
  {
    id:2,
    title:"Users",
    path:"/users",
    element:<Users/>
  },
  {
    id:1,
    title:"Auth",
    path:"/auth",
    element:<Auth/>
  },
]
const Header = () => {
  return (
    <div className='flex justify-center gap-5 items-center bg-blue-600 w-full p-5'>
      {navbarList.map(item => <NavLink to={item.path} key={item.id} className={"text-[1.3rem] font-semibold border-b-2 text-white border-b-transparent"}>{item.title}</NavLink>)}
    </div>
  )
}

export default Header
