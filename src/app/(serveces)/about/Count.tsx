 "use client"
import { useState } from "react"
function Count() {
    const [count,setCount] = useState(0);
  return (
    <div className="h-52 w-92 bg-cyan-900 text-white flex flex-col justify-center items-center rounded-md">
        <h1 className="text-5xl">{count}</h1>
        <div className="w-full flex space-x-6 justify-center my-6">
        <button className="shadow-md hover:shadow-2xs shadow-black bg-white py-3 px-4 rounded-xl text-cyan-900 font-bold" onClick={()=> setCount(count+1 )}>Increment</button>
        <button className="shadow-md hover:shadow-2xs shadow-black bg-white py-3 px-4 rounded-xl text-cyan-900 font-bold" onClick={()=> setCount(count-1)}>Increment</button>
        </div>
    </div>
  )
}

export default Count