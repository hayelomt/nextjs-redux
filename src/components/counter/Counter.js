import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Counter({count, incrementCount, decrementCount}) {
  
  return (
    <div>
      Counter
      Count: {count}
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

// Counter.propTypes = {
//   count: PropTypes.number.isRequired,
//   incrementCount: PropTypes.func.isRequired,
//   decrementCount: PropTypes.func.isRequired,
// }

export default Counter;