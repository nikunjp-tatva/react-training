import React, { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => {
        return { value: 5 };
      });
    }, 2000);
  }
  render() {
    return <h1>Value is: {this.state.value}</h1>;
  }
}

export default LifeCycle;
