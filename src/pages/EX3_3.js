import React from 'react';
import ParentComponent from '../components/functional/ParentComponent';
import ErrorBoundary from '../components/shared/ErrorBoundary';

const EX3_3 = () => {
  return (
    <div>
      <h1>React Parent-Child Communication</h1>
      <ErrorBoundary>
        <ParentComponent />
      </ErrorBoundary>
    </div>
  );
};

export default EX3_3;
