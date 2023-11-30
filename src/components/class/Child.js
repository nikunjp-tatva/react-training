import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <p> Name: {this.props.name}</p>
        <p> Age: {this.props.age}</p>
        <p> City: {this.props.city}</p>
      </div>
    );
  }
}

export default Child;
