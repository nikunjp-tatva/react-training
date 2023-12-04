import React from "react";

export default function TodoTable(props) {
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
        {props.todos.map((todo) => (
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
