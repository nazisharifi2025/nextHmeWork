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
        <div className="h-52 w-92 text-3xl bg-cyan-900 text-white flex  justify-center items-center rounded-md">
    this is the product id is {proId}
    </div>
    </div>
  )
}

export default page