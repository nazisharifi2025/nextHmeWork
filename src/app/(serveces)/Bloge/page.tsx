import React from 'react'
export const metadata = {
    title : {
        absolute: 'Blog Page'
    }
}
function page() {
  return (
    <div className='h-screen w-full flex justify-center items-center font-bold text-5xl text-center'><h1>In this page the <span className='text-blue-500'>absolute</span> property is used inside the title object of the metedata</h1></div>
  )
}

export default page