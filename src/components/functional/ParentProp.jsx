import React from 'react';
import ChildProp from './ChildProp';

const ParentProp = (props) => {
  return (
    <div>
      <ChildProp name="Test1" age= "33" city="Ahmedabad" />
      <ChildProp name={props.name} age={props.age} city={props.city} />
    </div>
  );
};

export default ParentProp;
