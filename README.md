# Bun, Biome/OXC and Rsbuild Setup

<img align="right" src="https://github.com/tobua/bun-oxc-rsbuild/raw/main/logo.png" width="30%" alt="Logo" />

Example setup with Bun, Biome and Rsbuild. To use Biome and OXC features in the editor install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) and the [OXC VS Code extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode).

```sh
# Develop (Opens page in browser)
bun start
# Build
bun run build
# Preview (Serves current build)
bun preview
# Format and Lint (Biome)
bun check:biome
# Lint (OXLint)
bun lint:oxlint
# Test with Bun
bun run test
# Check types with TypeScript
bun types
```

## Notes

The Biome VS Code extension will fail to initialize if the `@biomejs/biome` dependency isn't available in the first workspace project. If you have other projects open in your workspace the workaround is to open this project in a separate window.
