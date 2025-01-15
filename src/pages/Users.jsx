import UserCard from '../Components/userCard'

export const usersList = [
  {
    id:1,
    username:"Asadulloh",
    surname:"Abdurakhmonov",
    age:21,
    region:"Andijon",
    study:"AIQ Insitut",
    course:4,
    isMarried:false
  },
  {
    id:2,
    username:"Tom",
    surname:"Thomas",
    age:23,
    region:"California",
    study:"USA University",
    course:2,
    isMarried:true
  },
  {
    id:3,
    username:"Jerry",
    surname:"Johnson",
    age:25,
    region:"Florida",
    study:"Florida Insitut",
    course:3,
    isMarried:true
  },
]
const Users = () => {


  return (
    <div className='flex items-center justify-center gap-2 mt-2'>
      {usersList.map(item => <UserCard key={item.id} item={item}/>)}
    </div>
  )
}

export default Users
