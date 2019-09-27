import React, {useState} from 'react'

function CounterHook() {
  const [count, setCount] = useState(10);

  return (
    <div>
      Counter Hook {count}
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

export default CounterHook
