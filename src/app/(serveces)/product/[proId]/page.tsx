import React from 'react'
async function page({params}:{params:Promise<{proId:string}>}) {
    const {proId} = await params;
  return (
    <div  className='h-[90vh] flex justify-center items-center'>
        <div className="h-52 w-92 text-3xl bg-cyan-900 text-white flex  justify-center items-center rounded-md">
    this is the product id is {proId}
    </div>
    </div>
  )
}

export default page