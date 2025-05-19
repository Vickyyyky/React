import React from 'react'
import Child2 from './Child2'
import Child2B from './Child2B';

const Parent2 = () => {
    let str="reactJs"
    let arr=["Frontend","Backend","Database"];
    let obj={
        id:1,
        ename:"Vicky"
    };
  return (
    <div>
        <h1>Parent2</h1>
         <Child2 prop1={str} prop2={arr} prop3={obj}/>
         <Child2B data={{str,arr,obj}}/>
    </div>
   
  )
}

export default Parent2