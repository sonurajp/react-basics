import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import hello from "./component/hello";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <hello />
  </React.StrictMode>,
  document.getElementById("root")
);
