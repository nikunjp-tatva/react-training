import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <div>
        <Child name="Test3" age="22" city="Vadodara" />
        <Child name={this.props.name} age={this.props.age} city={this.props.city} />
      </div>
    );
  }
}

export default Parent;
