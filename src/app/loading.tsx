import React from 'react'

function loading() {
  return (
    <div className=' h-screen w-full min-h-screen flex justify-center items-center bg-stone-50'>
        <div className=' h-32 w-32 rounded-full border border-b-emerald-900  mx-auto p-2 animate-spin'></div>
    </div>
  )
}

export default loading