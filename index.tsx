import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import logo from './logo.png'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <img style={{ maxHeight: 100 }} src={logo} alt="Logo" />
      <h1>Bun, OXC/Biome and Rsbuild</h1>
      <p>Starter project to demonstrate some new technologies on the horizon.</p>
      <div style={{ display: 'flex', gap: 20 }}>
        <span>Count: {count}</span>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
