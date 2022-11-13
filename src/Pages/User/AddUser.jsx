import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [phone,setPhone]=useState()

  const navigate = useNavigate()

  const data= {
    name:name,
    email:email,
    phone:phone
  }

  function submit(e){
    e.preventDefault();

    axios.post('http://localhost:3500/users', data)
    .then ( 
      navigate('/')
    )
  }

  return (
    <div className='w-screen h-full flex flex-col justify-center  items-center mt-16'>
      <h1  className=' text-black text-3xl font-semibold flex'>Add User</h1>
      <form className='w-[80%] h-full flex flex-col justify-center items-center mt-5'>
        <input value={name} onChange={(e) => setName (e.target.value)} type="text" placeholder='Enter your name' className='w-[80%]  bg-white/10 text-xl font-normal outline-none py-4 pl-6 border border- zinc-400' />

        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your Email' className='w-[80%] mt-4 bg-white/10 text-xl font-normal outline-none py-4 pl-6 border border- zinc-400' />

        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Enter your Phone' className='w-[80%] mt-4 bg-white/10 text-xl font-normal outline-none py-4 pl-6 border border- zinc-400' />
        <button onClick={submit} className='w-[80%] mt-4 bg-blue-600 text-xl   py-4 pl-6 text-white font-bold' >Add User</button>
      </form>
    </div>
  )
}

export default AddUser
