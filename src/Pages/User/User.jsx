import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {

    const [user,setUsers]=useState();

    useEffect (() => {
      axios.get(`http://localhost:3500/users/${id}`)
      .then((res) => {
        setUsers(res.data)
      })
    }, [])
    
    const {id} = useParams()


  return (
    <div className='w-full h-full flex flex-col justify-center items-center '>
        {user && (
<>


<div className='w-[700px] h-[200px] flex justify-center items-center px-6 py-4 border border-black mt-16'>

    <div className=' w-7/12 flex flex-col space-y-4'>
        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black' >Name</h2>
        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black' >Email</h2>
        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black' >Phone</h2>
    </div>
    <div className=' w-5/12 flex flex-col space-y-4'>
        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black' >{user.name}</h2>
        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black' >{user.email}</h2>
        <h2 className='text-black font-semibold font-Inter text-2xl border-b border-black' >{user.phone}</h2>
    </div>

</div>


</>
        )}

        <Link to='/' className='text-white font-semibold font-Inter text-2xl border-b border-black mt-4 bg-zinc-600 px-6 py-4 rounded-xl '>Back to Home</Link>
    </div>
  )
}

export default User
