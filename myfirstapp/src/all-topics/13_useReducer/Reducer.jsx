import React, {useReducer} from 'react'

const initialState = 0;
function useReducerfunc(prevState,action){
    switch(action){
        case "increment":
            return prevState +1;
    }
     switch(action){
        case "decrement":
            return prevState -1;
    }
       switch(action){
        case "reset":
            return 0 ;
    }
  
}






const Reducer = () => {
  const [state, dispatch] = useReducer(useReducerfunc, initialState)
  console.log(state);

  return (
    <div>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Reducer