import React from "react";
//
//v1 - const DestructurigProps = ({ name, heroName, children }) => {

// v2
const DestructurigProps = (props) => {
  const { name, heroName, children } = props;
  //
  return (
    <div>
      <h1>
        Name {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  );
};
export default DestructurigProps;
