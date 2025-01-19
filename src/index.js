import React from "react";
import ReactDOM from "react-dom/client";

// React router dom
import { BrowserRouter } from "react-router-dom";

// React redux
import { Provider } from "react-redux";
import store from "./store";

// Styles
import "./index.css";

// Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
