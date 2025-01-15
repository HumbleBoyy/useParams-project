import React from 'react'
import { useParams } from 'react-router-dom'
import { usersList } from './Users'
import UserCard from '../Components/userCard'

const SingleUser = () => {
  const {id} = useParams()
  const singleData = usersList.find(item => item.id == id)

  return (
    <div className='flex items-center justify-center mt-10'>
      <UserCard item={singleData}/>
    </div>
  )
}

export default SingleUser
