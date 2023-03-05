import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("")
  console.log(text)

  const submitHandler =(e)=>{
    e.preventDefault()

    searchText(text)
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto sticky top-[0px] '>
        <form onSubmit={submitHandler} className='w-full max-w-sm'>
            <div className='flex items-center border-b-2 border-blue-500 py-2 h'>
                <input onChange={e => setText(e.target.value)} className='w-full text-gray-700 mr-3 py-1 px-2 rounded-full  focus:outline-none' type='text' placeholder='Search Image Here...' />
                <button className='bg-blue-500 hover:bg-teal-700 border-blue-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' type='submit'>Search</button>
            </div>
        </form>
    </div>
  )
}

export default ImageSearch