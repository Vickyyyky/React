import React from 'react'
import { createContext } from 'react'
import ParentA1 from './ParentA1';

//! Step 1 : creating a global store
 export let myStore=createContext();

const MyContext = () => {
    let data="Hello World"

    console.log(myStore); // context object =>{provider:{$$typeof:........}}
  return (
    <div> 
        {/* Step 2:Providing access to parent component */}
        <myStore.Provider value={data}>
            <ParentA1/>
        </myStore.Provider>
      </div>
  )
}

export default MyContext