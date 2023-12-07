import React, { useState } from 'react';

const ChildComponent = ({ sendMessageToParent }) => {
  const [message, setMessage] = useState('');

  const handleMessageToParent = () => {
    sendMessageToParent(message);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleMessageToParent}>Send Message to Parent</button>
    </div>
  );
};

export default ChildComponent;
