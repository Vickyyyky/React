import React from 'react'
import Child1 from './Child1'

const Parent1 = () => {
    let str="Hello Child 1"
    let user={
        id:1,
        ename:"Vicky"
    }
    let arr=[10,20,30]

    let products=[
        {
            id:1,
            name:"Samsung",
            price:600000
        },
        {
            id:2,
            name:"Vivo",
            price:800000
        }
    ]
  return (
    <div>
        <h1>Parent1</h1>
        <Child1 str={str} user={user} arr={arr} products={products}/>
    </div>
    
  )
}

export default Parent1