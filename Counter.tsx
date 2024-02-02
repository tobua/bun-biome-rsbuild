import { type CSSProperties, useState } from 'react'

const buttonStyles: CSSProperties = {
  background: 'black',
  color: 'white',
  borderRadius: 10,
  border: 'none',
  outline: 'none',
  padding: 10,
  cursor: 'pointer',
}

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <span aria-label="count">Count: {count}</span>
      <button type="button" style={buttonStyles} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
