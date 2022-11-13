import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='w-full h-16 bg-blue-600 flex item-center px-10 py 10 py-2 justify-between'>
      <Link to="/" className=' text-white text-3xl font-semibold '>Crud</Link>
      <Link to='/add-user'className='w-48 bg-white text-blue-400 font-semibold text-xl h-12 rounded-lg flex items-center justify-center'>Add Users</Link>
    </div>
  )
}

export default Navbar
