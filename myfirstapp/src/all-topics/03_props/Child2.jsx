import React from 'react'

const Child2 = (props) => {
    console.log(props)
    let {prop1,prop2,prop3}=props
    console.log(prop1,prop2,prop3)
  return (
    <div>
        <h1>Child2</h1>
        </div>
  )
}

export default Child2