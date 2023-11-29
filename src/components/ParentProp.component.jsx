import React from 'react';
import Child from './ChildProp.component';

const Parent = (props) => {
  return (
    <div>
      <Child name="Test1" age= "33" city="Ahmedabad" />
      <Child name={props.name} age={props.age} city={props.city} />
    </div>
  );
};

export default Parent;
