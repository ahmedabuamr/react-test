import React from 'react'
export default function Searchbar({input , setInput ,handleSubmit}) {


  return (
    <div className=' max-w-[1260px] py-16 px-4'>
       <form onSubmit={handleSubmit} className='flex justify-center'>
          <button className=' bg-gray-200 p-2' type='submit'>Search by</button>
          <input  
            onChange={(e) => setInput(e.target.value)}
            value = {input}
            className='p-2 border w-[40%] outline-none'
            type="text" placeholder='Search term'/>
       </form>
    </div>
  )
}
