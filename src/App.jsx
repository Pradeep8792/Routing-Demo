import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './HomePage'
import SignInPage from './SignInPage'
import SignUp from './SignUp'

import Posts from './posts'
import Promices from './Promices'
import Comment from './Comment'
import ToDolist from './ToDolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Posts' element={<Posts/>}></Route>
        <Route path='/Images' element={<Promices/>}></Route>
        <Route path='/Comment' element={<Comment/>}></Route>
        <Route path='/ToDolist' element={<ToDolist/>}></Route>

       </Routes>

     </BrowserRouter>

     {/* <Promices/> */}
    </>
  )
}

export default App
