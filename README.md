# Bun, OXC and Rsbuild Setup

<img align="right" src="https://github.com/tobua/bun-oxc-rsbuild/raw/main/logo.png" width="30%" alt="Logo" />

Example setup with Bun, OXC and Rsbuild. To use OXC features in the editor install the [OXC VS Code extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode).

```sh
# Develop (Opens page in browser)
bun start
# Build
bun run build
# Preview (Build for production and serve)
bun run preview
# Lint (OXLint)
bun run lint
# Test with Bun
bun test
```

## Notes

The Biome VS Code extension will fail to initialize if the `@biomejs/biome` dependency isn't available in the first workspace project. If you have other projects open in your workspace the workaround is to open this project in a separate window.
