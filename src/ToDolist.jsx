import React, { useEffect, useState } from 'react'

function ToDolist() {
   const [getobj, setobj] = useState([])

  function Datafetch() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((obj) => {
        obj.json()
          .then((e) => {
            setobj(e)
          })
      }).catch((c) => {
        console.log("Data not found")
      })
  }
  useEffect(() => {

    Datafetch()
  }, [])

  return (
    <>
    <h1>This is a Todo page</h1>
    <div className='bg-red-300 flex flex-wrap border-2 h-auto '>

      {
        getobj.map((ele) => {
          return <div className='border-2 p-2 m-5 rounded-2xl'>
            <div className=' h-[300px] w-[300px] m-5 text-2xl  '>
             <p>{ele.id}</p>
              <p>{ele.title}</p>
              <p>{String(ele.completed)}</p>
            </div>
          </div>
        })
      }
    </div>
    </>
  )
}

export default ToDolist
