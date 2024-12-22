import React, { useEffect, useState } from 'react'

export default function Excuse() {
  const [count, setcount] = useState(0);
  const [user, setuser] = useState('dina');


  function changeCount(){
    setcount(Math.random())
  }


  function changeUser(){
    setuser('amel')
  }

//   useEffect(()=>{
// // mounted component
// // best place for calling APIs

// let x = setInterval(()=>{ console.log('hi dina');}, 1000)

// // console.log('hii');

// return()=>{
//   //unmounted
//   clearInterval(x)

// }

//     } , [] )

    useEffect(
      ()=>{
        //when count change, it enters the updating phase

        // to avoid printing with no need
        if(count == 0){
          return
        }

        //else or if i pressed do this 
        console.log('count changed');
        
      } , [count]
    )


    useEffect(
      ()=>{
        //when count change, it enters the updating phase

        // to avoid printing with no need
        if(user == 'dina'){
          return
        }

        //else or if i pressed do this 
        console.log('user changed');
        
      } , [user]
    )

    useEffect(
      ()=>{
        //when count change, it enters the updating phase

        // to avoid printing with no need
        if(user == 'dina' && count == 0){
          return
        }

        //else or if i pressed do this 
        console.log('user or count changed');
        
      } , [user , count]
    )



  return <>
  <h2>excuse</h2>
  <h2>count: {count}</h2>
  <h2>UserName: {user}</h2>
  <button onClick={changeCount} className='bg-red-500 mx-5 p-1'>change count</button>
  <button onClick={changeUser} className='bg-indigo-500 mx-5 p-1'>change user</button>
  </>
}
