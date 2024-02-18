import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { RootContextProvider } from "./context/context";
import swDev from "./swDev";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </React.StrictMode>
);

swDev();
