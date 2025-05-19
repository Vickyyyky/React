import React from 'react'

const Child2B = (props) => {
    console.log(props)
    let {str,arr,obj}=props.data
  return (
    <div>
        <h1>Child2B {str}</h1>
        
        </div>
  )
}

export default Child2B