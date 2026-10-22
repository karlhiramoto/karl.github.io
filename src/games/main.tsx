import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GamesPage from "./GamesPage";
import "../index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GamesPage />
  </StrictMode>
);
