import React from 'react'
import { Link } from 'react-router'

import { QRCode } from "antd";

const SignInPage = () => {
  return (
    <div className='h-screen text-2xl'>
      <h1>This is a sign in component</h1>
    <Link to="/Home">
     <button className=' border-2 rounded-xl p-3 '>Back</button>    </Link>
    
    <QRCode value='HEllo Icca Dvg'/>
    </div>
    
    
  )
}

export default SignInPage
