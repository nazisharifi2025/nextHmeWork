import React from 'react'
export const metadata = {
    title : {
        absolute: 'Blog Page'
    }
}
function page() {
  return (
    <div className='min-h-screen w-full flex justify-center items-center font-bold text-4xl h-screen w-full text-center'><h1>In this page the <span className='text-blue-500'>absolute</span> property is used inside the title object of the metedata</h1></div>
  )
}

export default page