import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name} a.k.a. {this.props.heroName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}
export default ClassComponent;
