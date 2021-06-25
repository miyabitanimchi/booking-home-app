import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import AppRouter from "./router/AppRouter";
import reportWebVitals from "./reportWebVitals";
import AccomProvider from "./context/accoms-context";

ReactDOM.render(
  <React.StrictMode>
    <AccomProvider>
      <AppRouter />
    </AccomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
