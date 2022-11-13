import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const [users,setUsers]=useState([]);

  const loadUsers = () => {
    axios.get('http://localhost:3500/users')
    .then((res) => {
      setUsers(res.data.reverse())
    })
  }

  useEffect(() => {
    loadUsers() 
  }, [users])

function Delete(id){
  axios.delete(`http://localhost:3500/users/${id}`)
  .then (
    loadUsers()
  )
}

  return (
      <div className='w-full h-full flex flex-col px-10 py-8'>
        <div className='w-full flex flex-col min-h-[50vh] justify-center items-center '>
        <h1 className=' text-black text-3xl font-semibold font-Montserrat'> Home Pages</h1>
        <table className='w-[95%] text-center overflow-hiden overflow-y-scrool mt-8 border border-black'>
          <thead className='border-b bg-gray-800'>
            <tr>
              <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                #
              </th>
              <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                Name
              </th>
              <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                Email
              </th>
              <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                Phone
              </th>
              <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>

            {users.map((data, index) => (

           
            <tr key={index} className='bg-white border-b'>
              <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                {index+1}
              </td>
              <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                {data.name}
                </td>
              <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                {data.email}
                </td>
              <td className='text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                {data.phone}
                </td>
                <td className='flex justify-center items-center space-x-4 mt-1'>
                  <Link to={`/users/${data.id}`} className='px-6 py-2 text-white font-semibold bg-yellow-400 rounded-lg'>View</Link>
                  <Link to={`/edit-user/${data.id}`} className='px-6 py-2 text-white font-semibold bg-blue-600 rounded-lg'>Edit</Link>
                  <button onClick={() => Delete(data.id)} className='px-6 py-2 text-white font-semibold bg-red-600 rounded-lg'>Delete</button>
                </td>
            </tr>
            ))}
          </tbody>
          </table>
        </div>


      </div>
  )
}

export default Home



// import React from 'react'

// const Home = () => {
//   return (
//       <div className='w-full h-full flex flex-col px-10 py-8'>
//         <div className='w-full flex flex-col min-h-[50vh] justify-center items-center '>
//         <h1 className=' text-black text-3xl font-semibold font-Montserrat'> Home Pages</h1>
//         <table className='w-[80%] text-center overflow-hiden overflow-y-scrool'>
//           <thead className='border-b bg-gray-800'>
//             <tr>
//               <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
//                 #
//               </th>
//               <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
//                 First
//               </th>
//               <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
//                 Last
//               </th>
//               <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
//                 Handle
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className='bg-white border-b'>
//               <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>1</td>
//               <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
//                 Mark
//                 </td>
//               <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
//                 Otto
//                 </td>
//               <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
//                 @mdo
//                 </td>
//             </tr>
//             <tr className='bg-white border-b'>
//               <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>2</td>
//               <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
//                 Jacob
//                 </td>
//               <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
//                 Thornton
//                 </td>
//               <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
//                 @fat
//                 </td>
//             </tr>
//             <tr className='bg-white border-b'>
//               <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>3</td>
//               <td colSpan='2' className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center'>
//                 Larry the Bird
//                 </td>
//               <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
//                 @twitter
//                 </td>
//             </tr>
//           </tbody>
//           </table>
//         </div>


//       </div>
//   )
// }

// export default Home
