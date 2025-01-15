import React from 'react'

const Users = () => {
  const usersList = [
    {
      id:1,
      username:"Asadulloh",
      surname:"Abdurakhmonov",
      age:21,
      region:"Andijon",
      sturdy:"AIQ Insitut",
      course:4,
      isMarried:false
    },
    {
      id:2,
      username:"Tom",
      surname:"Thomas",
      age:23,
      region:"California",
      sturdy:"USA University",
      course:2,
      isMarried:true
    },
    {
      id:3,
      username:"Jerry",
      surname:"Johnson",
      age:25,
      region:"Florida",
      sturdy:"Florida Insitut",
      course:3,
      isMarried:true
    },
  ]
  return (
    <div className='flex items-center justify-center gap-2 mt-2'>
      {usersList.map(item => (
        <div key={item.id} className='w-[400px] h-[220px] bg-slate-300 p-4 shadow-lg rounded-md'>
          <h2 className='text-[20px] block text-center font-semibold'>{item.username} - {item.surname}</h2>
          <div className='bg-transparent mt-2'>
            <p className='text-[18px] font-semibold'>Age: {item.age}</p>
            <p className='text-[18px] font-semibold'>Region: {item.region}</p>
            <p className='text-[18px] font-semibold'>Study: {item.sturdy} - Grade: {item.course}th</p>
            <p className='text-[18px] font-semibold'>Married: {item.isMarried === true ? "Married :)" : "Unmarried :("}</p>
            <button className='block mx-auto p-2 bg-green-600 w-full mt-2 font-semibold text-white shadow-md rounded-lg hover:bg-green-500'>More</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
