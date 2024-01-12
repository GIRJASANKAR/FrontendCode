import React, {useState} from 'react'

export function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(prevCount => prevCount + diff)
  }
  return (
    <div>
      <button data-testid="decrement-button" onClick={()=>updateCount(-1)}>-</button>
      <button data-testid="increment-button" onClick={()=>updateCount(1)}>+</button>
      <p>clicked: {count}</p>
    </div>
  )
}