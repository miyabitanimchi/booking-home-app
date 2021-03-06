import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import AppRouter from "./router/AppRouter";
import reportWebVitals from "./reportWebVitals";
import AccomsProvider from "./context/AccomsProvider";

ReactDOM.render(
  <React.StrictMode>
    <AccomsProvider>
      <AppRouter />
    </AccomsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
