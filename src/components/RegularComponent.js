// src/components/RegularComponent.js
import React, { useCallback } from 'react';
import MemoizedComponent from './MemoizedComponent';

const RegularComponent = ({ propA }) => {
  const memoizedCallback = useCallback(() => {
    // Do something when propA changes
    console.log('propA has changed');
  }, [propA]);

  return (
    <div>
      <MemoizedComponent onSomeEvent={memoizedCallback} />
    </div>
  );
};

export default RegularComponent;