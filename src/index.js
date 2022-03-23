import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppTodoList from "./App_TodoList";
import AppCoinTracker from "./AppCoinTracker";
//import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppTodoList />
    <AppCoinTracker />
  </React.StrictMode>,
  document.getElementById("root")
);
