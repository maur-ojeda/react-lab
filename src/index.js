import { StrictMode } from "react";
import ReactDOM from "react-dom";

import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ClassComponent />
    <FunctionalComponent />
  </StrictMode>,
  rootElement
);
