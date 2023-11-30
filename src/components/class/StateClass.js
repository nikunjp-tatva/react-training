import React, { Component } from "react";

class StateClass extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  incrementCounter = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  }

  decrementCounter = () => {
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
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}

export default StateClass;
