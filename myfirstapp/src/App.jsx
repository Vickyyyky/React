// import { useState } from "react";
import Navbar from "./components/Navbar";
import Fbc from "./all-topics/01_typesofComponents/Fbc";
import Cbc from "./all-topics/01_typesofComponents/Cbc";
import StatesinFbc from "./all-topics/02_states/StatesinFbc";
import CounterinFbc from "./all-topics/02_states/CounterinFbc";
import StatesinCbc from "./all-topics/02_states/StatesinCbc";
import Parent1 from "./all-topics/03_props/Parent1";
import Parent2 from "./all-topics/03_props/Parent2";
import Parent3 from "./all-topics/03_props/Parent3";
import Parent4 from "./all-topics/03_props/Parent4";
import Parent5 from "./all-topics/03_props/Parent5";
import DrillParent1 from "./all-topics/04_propsDrilling/DrillParent1";
import ParentA from "./all-topics/05-rerendering_of_component/ParentA";
import MyContext from "./all-topics/06_context/MyContext";
import Context2 from "./all-topics/07_context2/Context2";
import ParentComponent from "./all-topics/07_context2/ParentComponent";
import InlineCSS from "./all-topics/08_ReactCss/InlineCSS";
import Card from "./all-topics/08_ReactCss/Card";
import ControlledForms1 from "./all-topics/09_Controlledforms/ControlledForms1";
// import FetchApi2 from "./all-topics/FetchApi/FetchApi2";
import Reducer from "./all-topics/13_useReducer/Reducer";

const App=()=>{
    // // console.log("First")
    // let [state,setState]=useState(0)
    

    // function updateState(){
    //     setState(state+1)
    // }
  //   const [toggle, setToggle] = useState(false);

  // const toggleHandle = () => {
  //   setToggle(prev => !prev);
  // };

    return (
        <div>
            {/* <h1>My Component -{state}</h1>
            <button onClick={updateState}>update</button> */}
            {/* <Fbc/>
            <Cbc/>
            <h1>Hello world</h1>
            <h1>Hello</h1>
          <Navbar/> */}
          {/* <StatesinFbc/> */}
          {/* <CounterinFbc/>
          <StatesinCbc/> */}
          {/* <Parent1/> */}
          {/* <Parent2/> */}
          {/* <Parent3/> */}
          {/* <Parent4/> */}
          {/* <Parent5/> */}
          {/* <DrillParent1/> */}
          {/* <ParentA/> */}
          {/* <MyContext/> */}
          {/* <Context2>
            <ParentComponent/>
            <Cart/>
          </Context2> */}
          {/* <InlineCSS/> */}
          {/* <Card/> */}
          {/* <ControlledForms1/> */}
          {/* <FetchApi2/> */}
          {/* <button onClick={toggleHandle} className="bg-red-500 mb-3">Toggle</button>
          {toggle ? <FetchApi2/> : <h1>Not</h1>} */}
          <Reducer/>

        </div>
    );
};
export default App