import { createRoot } from "react-dom/client";
import logo from "./logo.png";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <img style={{ width: 200, height: 200 }} src={logo} alt="Logo" />
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
