import React from 'react'

// export default function Leave({prod, Deleteprod, idx})  //same as the var in the return in the home page 
export default function Leave({prod, Deleteprod, updateProd, idx}) 
{
  // console.log(props);
  

  let {pname, price, id, onSale, count} =prod; 

  


  return (
    <>

<div className='w-1/4'>

{/*card*/}
<div className=' bg-emerald-500 border relative rounded-md p-6 text-center'>
      
      <h3>name: {pname}</h3>
      <h3>price: {price}</h3>
      <h3>ID: {id}</h3>
      <h3>count : {count}</h3>

      {/*buttons*/}

      {/* <button onClick={Deleteprod} className='bg-red-600 mx-3 text-white rounded-md my-4 py-2 px-6'>delete</button> */}
      {/* <button onClick={()=>{Deleteprod(idx)}} className='bg-red-600 mx-3 text-white rounded-md my-4 py-2 px-6'>delete</button> */}
      <button onClick={()=>{Deleteprod(id)}} className='bg-red-600 mx-3 text-white rounded-md my-4 py-2 px-6'>delete</button>
      <button onClick={()=>{updateProd(idx)}} className='bg-yellow-600 mx-3 text-white rounded-md my-4 py-2 px-6'>update</button>

      {/*onsale*/}

      {
        onSale == true ? 
        <div className='sale bg-red-300 absolute top-0 end-0'>on sale</div> 
        : null
      }

    </div>
</div>

    </>
  )
}
