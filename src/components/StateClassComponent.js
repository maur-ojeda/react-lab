import React, { Component } from "react";

class StateClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "initial state"
    };
  }

  changeMenssage() {
    this.setState({
      message: "change state"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMenssage()}> Action </button>
      </div>
    );
  }
}
export default StateClassComponent;
