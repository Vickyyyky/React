import React, { useState } from 'react'
import Child4 from './Child4'

const Parent4 = () => {
    let[state,setState]=useState("");
    function getData(x){
        console.log(x);
        setState(x);
    }
  return (
    <div>
        <h1>Parent4 <span>{state}</span>{" "}</h1>
        <Child4 getData={getData}/>
        </div>
  )
}

export default Parent4