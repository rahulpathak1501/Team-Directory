import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { StateProvider } from "./redux/StateProvider";
import reducer, { initialState } from "./redux/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
