import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import ClassComponent from "./components/ClassComponent";
// import FunctionalComponent from "./components/FunctionalComponent";
// import FunctionProps from "./components/FunctionProps";
import StateClassComponent from "./components/StateClassComponent";
import CounterComponent from "./components/CounterComponenet";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    {/*<FunctionalComponent />*/}

    {/*<FunctionProps name="Tony" heroName="Ironman">
      <p>this children props</p>
    </FunctionProps>
    <FunctionProps name="Steve" heroName="Captain merica">
      <button>Button</button>
    </FunctionProps>

    <ClassComponent name="Bruce" heroName="Hulk">
      <p>class children props</p>
    </ClassComponent>
*/}
    <StateClassComponent />
    <CounterComponent />
  </StrictMode>,
  rootElement
);
