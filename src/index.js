import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppTodoList from "./App_TodoList";
//import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppTodoList />
  </React.StrictMode>,
  document.getElementById("root")
);
