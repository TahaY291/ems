import React,{useState} from 'react'

function Login( {handleLogin}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')        
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 '>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required className='border-2 border-emerald-600 px-5 py-3 text-xl outline-none bg-transparent rounded-full placeholder:text-gray-500' type="email" placeholder='Enter your email' />
                <input
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required className='border-2 border-emerald-600 px-5 py-3 text-xl mt-3 outline-none bg-transparent rounded-full placeholder:text-gray-500' type="password" placeholder='Enter Password' />
                <button className='border-none w-full mt-7 px-5 py-3 text-xl text-white outline-none bg-emerald-600 rounded-full' >Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
