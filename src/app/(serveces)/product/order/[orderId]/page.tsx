import React from 'react'

async function page({params}:{params:Promise<{orderId:string}>}) {
    const orderid = (await params).orderId;
    function handelClick(){
        
    }
  return (
    <div>You are Order the item {orderid}
    <button onClick={handelClick}>Order Now</button>
    </div>
  )
}

export default page