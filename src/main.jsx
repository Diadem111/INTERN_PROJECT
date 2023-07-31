import React from "react";
import { HashRouter } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </HashRouter>
  </React.StrictMode>
);
