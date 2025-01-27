import { useState } from "react";

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  let count = 0;
  const [todoList, setTodoList] = useState([]);

  const handleChange = function (event) {
    const { value } = event.target;
    setTodo(() => value);
  };

  const handleClick = function () {
    if (todo !== "") {
      setTodoList((todoList) => [...todoList, todo]);
      setTodo(() => "");
    } else {
      return;
    }
  };

  return (
    <main className="wrapper">
      <h1>TODO LIST</h1>
      <TodoForm
        todo={todo}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <TodoList todoList={todoList} />
    </main>
  );
}

export default App;
