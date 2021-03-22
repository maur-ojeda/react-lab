import React, { Component } from "react";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  incrementCounter() {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => console.log("callback: " + this.state.count)
    );
  }

  incrementCounterPrevState() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.incrementCounter()}>
          increment counter
        </button>
        <button onClick={() => this.incrementCounterPrevState()}>
          increment counter prevstate
        </button>
      </div>
    );
  }
}
export default CounterComponent;
