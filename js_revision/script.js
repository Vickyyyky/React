// default import
import add from "./functions.js";


//named import
import { multiply as mul,useState } from "./functions.js";


console.log(add(10,20))
console.log(mul(10,20))
console.log(useState()); //[ud,f]

let [state,setState]=useState("Hello")
console.log(state);