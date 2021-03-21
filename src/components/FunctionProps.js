import React from "react";
//props are inmutable
const FunctionProps = (props) => {
  return (
    <div>
      <h1>
        Name {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
export default FunctionProps;
