import React, { Component } from "react";

class StateClass extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  handleIncrementCounterButton = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  }

  handleDecrementCounterButton = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter ? prev.counter - 1 : prev.counter,
      };
    });
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleIncrementCounterButton}>Increment</button>
        <button onClick={this.handleDecrementCounterButton}>Decrement</button>
      </div>
    );
  }
}

export default StateClass;
