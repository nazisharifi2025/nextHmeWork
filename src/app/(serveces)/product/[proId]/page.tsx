import type{ Metadata } from 'next';
import React from 'react'
type Paramitr ={
    params:Promise<{proId:string,reviws:string}>
}
export const generateMetadata = async({params}:Paramitr):Promise<Metadata>=>{
     const {proId , reviws} = await params;
     return{
        title: `Product ${proId}`
     };
}
async function page({params}:Paramitr) {
    const {proId} = await params;
    
  return (
    <div  className='h-[90vh] flex justify-center items-center'>
        <div className=" text-3xl  flex flex-col  justify-center items-center rounded-md">
    this is the product id is {proId}
    <h1 className='shadow-xl shadow-gray-400'>in this page the <span className='text-blue-600'>METADATA</span> is defined as on object</h1>
    </div>
    </div>
  )
}

export default page