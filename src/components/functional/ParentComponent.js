import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [messageFromChild, setMessageFromChild] = useState('');

  const handleMessageFromChild = (message) => {
    setMessageFromChild(message);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from Child: {messageFromChild}</p>
      <ChildComponent sendMessageToParent={handleMessageFromChild} />
    </div>
  );
};

export default ParentComponent;
