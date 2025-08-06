import React from 'react'
import { Link } from 'react-router'



const HomePage = () => {
  return ( 
    <div className=' h-screen p-10 *:p-5'>
      <Link to="/Posts">
        <button className='bg-yellow-500 border-2 rounded-xl p-5'>Posts</button>
      </Link>
      <Link to="/Images">
        <button className='bg-yellow-500 border-2 rounded-xl p-5'>Images</button>
      </Link>
      {/* vgb */}
      <Link to="/Comment">
        <button className='bg-yellow-500 border-2 rounded-xl p-5'>Comment</button>
      </Link>
      {/*  */}
      <Link to="/ToDolist">
        <button className='bg-yellow-500 border-2 rounded-xl p-5'>ToDoList</button>
      </Link>

    </div>
  )
}

export default HomePage
