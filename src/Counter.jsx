import React, {useEffect, useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState("Eggs")

  useEffect(()=>{
    console.log(`${item} are available`)
  }, [item])

  return (
    <div>
        <h3>The Number of {item} is: {count}</h3>
        <div>
            <button className='bg-green-500 mx-2' onClick={()=>setCount(count + 1)}>Add to Cart</button>
            <button  className='bg-green-500 mx-2'  onClick={()=>setCount(count - 1)}>Remove</button>
            <h3>Change Product:</h3>
            <input className='border' type="text" onChange={(e)=> setItem(e.target.value)} />
        </div>
    </div>
  )
}

export default Counter