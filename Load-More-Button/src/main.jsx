import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoadMoreButton from "./assets/Components/LoadMoreButton";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <LoadMoreButton />
  // </StrictMode>,
);
