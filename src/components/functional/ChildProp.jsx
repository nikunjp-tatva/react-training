import React from "react";

const ChildProp = (props) => {
  return (
    <div>
      <h4> Name: {props.name}</h4>
      <h4> Age: {props.age}</h4>
      <h4> City: {props.city}</h4>
    </div>
  );
};

export default ChildProp;
