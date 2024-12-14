    import React from 'react'
    
    function CompleteTask({data}) {
      return (
        <div className='flex-shrink-0 p-6 h-full w-[30%] bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
           <h3 className='bg-red-600 text-sm px-3 py-1 rounded '>{data.category}</h3>
           <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-3xl font-semibold '>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
     <div className='mt-4'>
        <button className='w-full bg-green-500 px-2 py-1 text-sm'>completed</button>
     </div>
     </div>
      )
    }
    
    export default CompleteTask
    