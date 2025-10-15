import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TabTest from "./TabTest";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TabTest />
  </StrictMode>
);
