import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./components.js/todo";
import TodoList from "./components.js/todoList";

function App() {
  return (
    <div className="App">

      <TodoList />
    </div>
  );
}

export default App;
