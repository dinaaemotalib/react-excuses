import React, { useState } from 'react'

export default function Home() {

  let x = 10 ;
  // let userName = 'Dina';
  let obj ={
    name: 'sara',
    age:23
  }


  // useState(0)
  // let [count , setCount] = useState(0) //use state return value and the updated function
  // setCount(count*10)

let [count , setCount] = useState(0)

let [userName , setuserName] = useState('sara')

function changeCount(){
setCount(count++)
}

function changeName(){
  setuserName('dina')
  }
  


  //   let count = 0 ;
  // function changeCount(y){
  //   count+=1;
  //   console.log('change' , y);
// }

  return <>

  <h2>Home page</h2>
  <h3>x = {x} </h3>
  {/* <h3>hello {userName} </h3> */}
  {/* <h4>Name: {obj.name}</h4>
  <h4>age: {obj.age}</h4> */}

  <h4>username: {userName}</h4>
  <h4>Count: {count}</h4>

  <button onClick={changeCount} className='bg-blue-500'>change count</button> <br /> <br />
  <button onClick={changeName} className='bg-blue-500'>change Name</button>
  {/* <button onClick={()=>{changeCount(5)}} className='bg-blue-500'>change count</button> */}


  </>

  
}
