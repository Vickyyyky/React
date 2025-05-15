import React from 'react'
import { useState } from 'react';
const StatesinFbc = () => {
   //console.log(useState());//[undefined,function]
  
   let[state,setState]=useState("add to cart");
    console.log(state);
    // console.log(setState);


    function cartbtn(){
setState("go to cart")

    }
    
    
  return (
    <div>
        <h1>StatesinFbc</h1>
        <button onClick={cartbtn}>{state}</button>
        </div>
  );
};

export default StatesinFbc