import React from 'react'

function loading() {
  return (
    <div className=' h-screen w-full min-h-screen flex justify-center items-center bg-black'>
        <div className=' h-20 w-20 rounded-full border-2 border-gray-300 border-b-emerald-900  mx-auto p-2 animate-spin'></div>
    </div>
  )
}

export default loading