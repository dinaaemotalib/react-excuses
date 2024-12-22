import React, { useEffect, useState } from 'react'
import Leave from '../Leave/Leave'

export default function Home() {

  

  let [count , setCount]=useState(0)
  let [products , setProduct] = useState([
    {pname: 'iphone' , price: 5000000 , id: 255 , onSale: true, count: 4},
    {pname: 'samsung' , price: 40000 , id: 55 , onSale: false, count: 4},
    {pname: 'nokia' , price: 500 , id: 25 , onSale: true, count: 4},
  ])

    {/*delete function*/}

    //or idx
    function Deleteprod(id){

      let newProducts = structuredClone(products)
      let newArr = newProducts.filter((prod)=>{return prod.id !== id})
      setProduct(newArr)


      // console.log('delete', idx);
     
      // products.splice(idx , 1)  //to delete sth from array with index way
      // let newArr = products.filter((prod)=>{return prod.id !== id})
      // console.log('delete', id);
    }

    function updateProd(idx){

      let newProd= structuredClone(products)
      newProd[idx].count+=1

      setProduct(newProd)
      console.log('update', idx);
      
    }


  return <>
  <h2>new product from leave page </h2>
<div className='flex flex-wrap'>
{
  //map is like for loop
  products.map((products, index)=>{
    // return <Leave idx={index} Deleteprod={Deleteprod} prod={products}/>
    return <Leave key={products.id} idx={index} updateProd={updateProd} Deleteprod={Deleteprod} prod={products}/>
  })
}
</div>

  </>

  
}
