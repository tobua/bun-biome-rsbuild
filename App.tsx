import { CSSProperties } from 'react'
import { Counter } from './Counter'
import logo from './logo.png'

const wrapperStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  alignItems: 'center',
  fontFamily: 'sans-serif',
}

export const App = () => (
  <div style={wrapperStyles}>
    <img style={{ maxHeight: 100 }} src={logo} alt="Logo" />
    <h1 data-testid="title">Bun, OXC/Biome and Rsbuild</h1>
    <p>Starter project to demonstrate some new technologies on the horizon.</p>
    <Counter />
  </div>
)
