import React from 'react'
import { useState } from 'react'
const CounterinFbc = () => {
   let [count,setCount]= useState(0)

   let incre=()=>setCount(count+1);
   let decre=()=>{setCount(count-1);
    if(count<=0){
   setCount(0) ;
   }
   }
   let reset=()=>setCount(count-count);
   

   
  return (
    <div>
        <h1>CounterinFbc</h1>
        <h2>Count:{count}</h2> 
        <button onClick={incre}>increment</button>
        <button onClick={decre}>decrement</button>
        <button onClick={reset}>reset</button>
        </div>
  )
}

export default CounterinFbc