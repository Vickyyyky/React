import React from 'react'
import DrillChild2 from './DrillChild2'

const DrillChild1 = (props) => {
    console.log(props);  //(data:"Hii")
  return (
    <div>
        <h2>DrillChild1</h2>
        <DrillChild2 data2={props.data}/>
        </div>
  )
}

export default DrillChild1