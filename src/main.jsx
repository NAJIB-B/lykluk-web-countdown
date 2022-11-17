import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./Context.jsx";
import Favicon from "react-favicon";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <React.StrictMode>
      <Favicon url={"./images/lykluk-lite.svg"}/>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
