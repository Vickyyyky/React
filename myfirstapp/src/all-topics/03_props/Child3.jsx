import React from 'react'

const Child3 = (props) => {
    console.log(props); //{getData:f}

    //! this function will get called after button click
    function sendData(){
    props.getData("Hii from Child3") //send string data to parent3 as arguments
    }
  return (
    <div>
        <h1>Child3</h1>
        <button onClick={sendData}>sendData</button>
        </div>
  )
}

export default Child3