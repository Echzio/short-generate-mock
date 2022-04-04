import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/";

import './assets/styles/root.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
