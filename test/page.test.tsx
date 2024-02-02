import { expect, test } from 'bun:test'
import * as matchers from '@testing-library/jest-dom/matchers'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { App } from '../App'

// @ts-ignore
expect.extend(matchers)

test('Increments counter.', async () => {
  render(<App />)

  await userEvent.click(screen.getByText('Increment'))
  const count = screen.getByLabelText('count')

  expect(count.textContent).toBe('Count: 1')

  // @ts-ignore
  expect(screen.getByTestId('title')).toHaveTextContent('Bun, OXC/Biome and Rsbuild')
})
