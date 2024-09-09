import React from 'react'
import {data} from "./Features"
import { useNavigate } from 'react-router-dom'
const Flexfeature = () => {
  return (
    <div className=''>
     {
        data.map((ele)=>{return <Card>{ele}</Card>})
      }
    </div>
  )
}

function Card({children}){
  const navigate = useNavigate()
  return (
    <div className='flex  w-full bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 pt-8 pb-8'>
     <div className=' flex justify-between ml-10 mr-10 shadow mt-5 mb-5 border-2 p-10 h-[28rem] rounded-lg hover:shadow-md bg-white'>
       <div className='w-[40%]'>
       <h1 className='text-5xl font-bold '>
      {children.Title}
        </h1>
        <p className='pt-5 text-xl font-medium font-serif'>{children.description}</p>
        <button onClick={()=>navigate('./sign-up')} className='text-white bg-gradient-to-br from-green-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-14'>{children.buttonData}</button>
       </div>
       <div className='w-[40%] '>
       <img className='w-[25rem] hover:scale-110 duration-500' src={children.imageUrl}/>
       </div>
        </div>
        
    </div>
  )
}

export default Flexfeature