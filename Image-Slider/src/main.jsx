import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ImageSlider from "./ImageSlider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ImageSlider
      url={"https://picsum.photos/v2/list"}
      limit={"10"}
      page={"4"}
    />
  </StrictMode>
);
