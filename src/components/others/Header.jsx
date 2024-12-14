import React,{useState} from 'react'

function Header(props) {
  // const [userName, setUserName] = useState('')
  // if (!data) {
  //   setUserName('admin')
  // }else{
  //   setUserName(data.firstName)
  // }
  
  const  logOut = ()=>{
    localStorage.setItem('loggedInUser', "")
    props.changeUser('')
  }
  return (
    
      <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hi! <br /> <span className='text-3xl font-semibold'> {props.data.firstName ? props.data.firstName : "Admin" } 👋 </span></h1>
        <button onClick={logOut} className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
      </div>
    
  )
}

export default Header
