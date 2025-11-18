
import React from 'react'
import Link from 'next/link'
export const Metadata = {
  title: "Product Page"
}
function page() {
  return (
    <div  className='h-[90vh] flex justify-center items-center'>
      <div className='py-12 px-18 flex justify-center w-fit shadow-md shadow-gray-400  items-center flex-col'>
        <h1 className='text-5xl'>👜</h1>
        <h1 className='text-2xl'>Bag</h1>
        <Link replace className='px-2 py-1 bg-cyan-700 text-white rounded-md' href="product/1">Learn More..</Link>
      </div>
      <div className='py-12 px-18 flex justify-center w-fit shadow-md shadow-gray-400  items-center flex-col'>
        <h1 className='text-5xl'>👠</h1>
        <h1 className='text-2xl'>shoe</h1>
        <Link replace className='px-2 py-1 bg-cyan-700 text-white rounded-md' href="product/2">Learn More..</Link>
      </div>
      <div className='py-12 px-18 flex justify-center w-fit shadow-md shadow-gray-400  items-center flex-col'>
        <h1 className='text-5xl'>👗</h1>
        <h1 className='text-2xl'>Dress</h1>
        <Link replace className='px-2 py-1 bg-cyan-700 text-white rounded-md' href="product/3">Learn More..</Link>
      </div>
    </div>
  )
}

export default page