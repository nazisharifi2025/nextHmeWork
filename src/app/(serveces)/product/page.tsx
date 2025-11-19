import Link from 'next/link'
export const Metadata = {
  title: "Product Page",
}
const list:{id:number , name:string , price:number}[] = [
  {id: 1 , name: "Apple",price: 230},
  {id: 2 , name: "Oringe",price: 200},
  {id: 3 , name: "Banana",price: 190},
  {id: 4 , name: "Mango",price: 130},
  {id: 5 , name: "Peach",price: 100}
]
function page() {
  return (
    <div  className='h-[90vh] grid grid-3 justify-center gap-5 items-center'>
      {list.map((product)=>(
        <div key={product.id} className='p-4 rounded-md bg-gray-500  text-white'>
          <h1  className='w-fit p-2 text-white bg-black'>{product.id}</h1>
          <h1 className='text-4xl text-green-400 '>{product.name}</h1>
          <h1>{product.price}</h1>
          <Link className='bg-blue-400 text-white px-5 py-2' href={`product/order/${product.id}`}></Link>
        </div>
      ))}
    </div>
  )
}

export default page