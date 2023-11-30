import React from "react";

const ChildProp = (props) => {
  return (
    <div>
      <p> Name: {props.name}</p>
      <p> Age: {props.age}</p>
      <p> City: {props.city}</p>
    </div>
  );
};

export default ChildProp;
