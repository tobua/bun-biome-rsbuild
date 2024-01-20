import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  source: {
    entry: { index: './index.tsx' },
  },
  plugins: [pluginReact()],
})
