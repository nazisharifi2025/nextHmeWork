import { Metadata } from 'next'
import { notFound } from 'next/navigation'
type Paramitr ={
    params:Promise<{proId:string,reviws:string}>
}
export const generateMetadata = async({params}:Paramitr):Promise<Metadata>=>{
     const {proId , reviws} = await params;
     return{
        title: `Product ${proId} visited ${reviws} times`
     };
}

async function page({params}:Paramitr) {
    const {proId , reviws} = await params;
    if(+reviws > 100){
        return notFound();
    }
  return (
    <div  className='h-[90vh] flex justify-center items-center'>
        <div className="h-52 text-3xl  w-92 bg-cyan-900 text-white flex  text-center justify-center items-center rounded-md">
    this is the pruduct id is {proId} and revios  id is {reviws}
    </div>
    </div>
  )
}

export default page