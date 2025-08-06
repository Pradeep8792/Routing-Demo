import React, { useEffect, useState } from 'react'
import Loader from './Loading'

function Comment() {
    const [getobj, setobj] = useState([])
    const [getload, setLoad] = useState(true)

    function Datafetch() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((obj) => {
                obj.json()
                    .then((e) => {
                        setobj(e)
                        setLoad(false)
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
          {
            !getload ?
          <div>

            <h1>This is a Comment page</h1>
            <div className=' flex flex-wrap   border-2 h-auto '>

                {
                    
                    getobj.map((ele) => {
                        return <div className='border-2 bg-amber-300 p-2 m-5 rounded-2xl'>
                            <div className=' h-[300px] w-[300px] m-5 text-2xl  '>
                                <p>{ele.name}</p>
                                <p>{ele.email}</p>
                                <p>{ele.body}</p>
                            </div>
                        </div> 
                    })
                }
            </div>
          </div>:<div className=' h-screen flex items-center justify-center'><Loader /></div>
          }

    

        </>
    )
}

export default Comment
