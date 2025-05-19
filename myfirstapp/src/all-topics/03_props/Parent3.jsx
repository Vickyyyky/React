import React, { useState } from 'react'

import Child3 from './Child3'

const Parent3 = () => {  
    
    const [state,setState]=useState("");

    function getDataFromChild(data){
        console.log(data) //-> //from child 3 component --> hii from child 3
        setState(data); // storing data to state to display on ui
    }
   
  return (
    <div>
        <h1>Parent3 {state}</h1>
        <Child3 getData={getDataFromChild}/>
        </div>
  )
}

export default Parent3