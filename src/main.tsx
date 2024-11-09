import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AdviceProvider } from "./adviceContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AdviceProvider>
      <App />
    </AdviceProvider>
  </StrictMode>
);
