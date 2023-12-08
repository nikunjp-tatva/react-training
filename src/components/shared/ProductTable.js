import React from "react";

export default function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props?.products?.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
