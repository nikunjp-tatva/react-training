import React, { Component } from "react";

import { fakeTodoApiUrl } from "../../constant"

class GetData extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {this.props.todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
              <td>{String(todo.completed)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    fetch(fakeTodoApiUrl)
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
            <GetData todos={this.state.todo} />
          )}
        </div>
      </>
    );
  }
}
