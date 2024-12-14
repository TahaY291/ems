import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {

  const [userData, setUserData] = useContext(AuthContext)
  

  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-5 rounded  mt-5 '>
      <div className='bg-[#1c1c1c] border-[1px] border-white text-black mb-2 py-2 px-4 flex justify-between rounded  '>
          <h2 className='text-lg font-medium w-1/5 text-white  px-2 py-1 rounded'>Employee Name</h2>
          <h3 className='text-lg font-medium w-1/5 text-white  px-2 py-1 rounded'>Active Task</h3>
          <h5 className='text-lg font-medium w-1/5 text-white  px-2 py-1 rounded'>New Task </h5>
          <h5 className='text-lg font-medium w-1/5 text-white  px-2 py-1 rounded'>Completed</h5>
          <h5 className='text-lg font-medium w-1/5 text-white  px-2 py-1 rounded'>Failed</h5>
        </div>
      <div id='tasklist' className=''>
      {
        
        userData.map((elem)=>{
          return       <div key={elem.id} className='border-[1px] border-white mb-2 py-2 px-4 flex justify-between rounded  '>
          <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
          <h3 className='text-lg font-medium w-1/5'>{elem.taskNumbers.active}</h3>
          <h5 className='text-lg font-medium w-1/5'>{elem.taskNumbers.newTask}</h5>
          <h5 className='text-lg font-medium w-1/5'>{elem.taskNumbers.completed}</h5>
          <h5 className='text-lg font-medium w-1/5'>{elem.taskNumbers.failed}</h5>
        </div>
        })
      }

      </div>

    </div>
  )
}

export default AllTask
