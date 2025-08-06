import React from 'react'
import { Link } from 'react-router'

const SignUp = () => {
  return (
    <>
    
    <div className='text-2xl h-screen bg-amber-300'>
      <h1>This is a sign up component</h1>
     <Link to="/Home">
     <button className=' border-2 rounded-xl p-5'>Back</button>
    </Link>
    </div>
    </>
 
  )
}

export default SignUp
