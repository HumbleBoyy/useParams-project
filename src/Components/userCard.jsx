import { useNavigate } from 'react-router-dom'

const UserCard = ({item}) => {
const navigate = useNavigate()
  return (
    <div className='w-[400px] h-[220px] bg-slate-300 p-4 shadow-lg rounded-md'>
    <h2 className='text-[20px] block text-center font-semibold'>{item.username} - {item.surname}</h2>
    <div className='bg-transparent mt-2'>
      <p className='text-[18px] font-semibold'>Age: {item.age}</p>
      <p className='text-[18px] font-semibold'>Region: {item.region}</p>
      <p className='text-[18px] font-semibold'>Study: {item.study} - Grade: {item.course}th</p>
      <p className='text-[18px] font-semibold'>Married: {item.isMarried === true ? "Married :)" : "Unmarried :("}</p>
      <button onClick={()=> navigate(`${item.id}`)} className='block mx-auto p-2 bg-green-600 w-full mt-2 font-semibold text-white shadow-md rounded-lg hover:bg-green-500'>More</button>
    </div>
  </div>
  )
}

export default UserCard
