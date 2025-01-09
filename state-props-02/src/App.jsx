import React, { useState } from 'react'
import Temp from './Component/Temp';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      {/* <marquee >this is a banner</marquee> */}
      <div className='h-screen gap-4  flex bg-black text-white text-2xl flex-col items-center justify-center '>
        {count}

        <div className='flex gap-3 text-lg'>
          <button className='p-2 bg-blue-500 rounded-lg text-white' onClick={()=>setCount(count+1)}>increase</button>
          <button className='p-2 bg-blue-500 rounded-lg text-white' onClick={()=> setCount(0)}>reset</button>
          <button className='p-2 bg-blue-500 rounded-lg text-white' onClick={()=> setCount(count-1)}>decrease</button>
        </div>
      </div>
    </>
  )
}

export default App



//states, props, useState like hooks

// useState syntax:
// const [variable, method] = useState(initial value)