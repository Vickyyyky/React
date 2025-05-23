import { useContext } from "react"
import { myStore } from "./MyContext"

const ChildA2 = () => {
   let data= useContext(myStore)
    console.log(data);
  return (
    <div>
        <h1>ChildA2</h1>
        </div>
  )
}

export default ChildA2