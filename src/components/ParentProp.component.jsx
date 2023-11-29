import React from 'react';
import Child from './ChildProp.component';

const Parent = () => {
  return (
    <div>
      <Child name="Test" age= "33" city="N/A" />
    </div>
  );
};

export default Parent;
