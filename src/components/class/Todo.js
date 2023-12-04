import React, { Component } from "react";

import constant from "../../constant"
import TodoTable from "../shared/TodoTable";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    fetch(constant.fakeTodoApiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ todo: data, isLoading: false }));
  };

  render() {
    return (
      <>
        <div>
          <h1>User Todo</h1>
        </div>
        <div>
          {this.state.isLoading ? (
            "Fetching data from API"
          ) : (
            <TodoTable todos={this.state.todo} />
          )}
        </div>
      </>
    );
  }
}
