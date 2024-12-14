import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext)

  const [title, setTaskTitle] = useState('')
  const [description, setTaskDescription] = useState('')
  const [date, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')


  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({ title, description, date, category, active: false, failed: false, completed: false, newTask: true })


    const data = userData


    data.forEach((elem) => {

      if (elem.firstName === asignTo) {
        
          elem.tasks.push(newTask)
        elem.taskNumbers.newTask =elem.taskNumbers.newTask + 1
      }
      setUserData(data)
      console.log(data);
      


      setAsignTo('')
      setCategory('')
      setTaskDate('')
      setTaskDescription('')
      setTaskTitle('')
    });


  }
  return (


    <div className='p-5 mt-5 rounded bg-[#1c1c1c]'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full item-start justify-between '   >
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input value={title} onChange={(e) => setTaskTitle(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a ui' />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input value={date} onChange={(e) => setTaskDate(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input value={asignTo} onChange={(e) => setAsignTo(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
          </div>
          <div>

            <h3 className='text-sm text-gray-300 mb-0.5'>Catogory</h3>
            <input value={category} onChange={(e) => setCategory(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev ,' />

          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea value={description} onChange={(e) => setTaskDescription(e.target.value)} name="" id="" color='30' rows='10' className='w-full h-44 text-sm py-2 px-4 rounded outlin-none bg-transparent border-[1px] border-gray-400' ></textarea>
          <button type='submit' className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
            Create Task
          </button>
        </div>



      </form>
    </div>


  )
}

export default CreateTask
