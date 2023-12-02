// src/components/MemoizedComponent.js
import React from 'react';

const MemoizedComponent = React.memo(({ text }) => {
  // Implement memoization to avoid frequent re-renders
  // TODO: Implement the code for this comment
  return <div>{text}</div>;
});

export default React.memo(MemoizedComponent);