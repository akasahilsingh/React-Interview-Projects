import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ScrollIndicator from "./scrollIndicator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollIndicator />
  </StrictMode>
);
