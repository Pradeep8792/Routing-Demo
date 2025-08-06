import React, { useEffect, useState } from 'react'

const Promices = () => {
  const [getobj, setobj] = useState([])

  function Datafetch() {
    fetch('https://jsonplaceholder.typicode.com/photos')
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
    <h1>This is a Photos page</h1>
    <div className='bg-red-300 flex flex-wrap border-2 h-auto '>

      {
        getobj.map((ele) => {
          return <div className='border-2 p-2 m-5 rounded-2xl'>
            <div className=' h-[300px] w-[300px] m-5 text-2xl  '>
              <img src={ele.thumbnailUrl} alt="v" height={100} />
              <p>{ele.title}</p>
            </div>
          </div>
        })
      }
    </div>
    </>
  )
}

export default Promices
