import { useState } from "react";

import "./App.css";
import TodoList from "./components/todo-list";

function App() {
  const [todo, setTodo] = useState({
    id: "uniqueId",
    todoText: "리액트 배우기",
    isEditing: false,
  });
  const handleIsEditing = () => {
    setTodo({
      ...todo,
      isEditing: !todo.isEditing,
    });
  };
  const handleTodoText = (e) => {
    setTodo({
      ...todo,
      todoText: e.target.value,
    });
  };
  return (
    <div className="wrapper">
      <h1 className="header">Vite Todo App</h1>
      <div className="form-wrapper">
        <form className="form">
          <input
            className="form-input"
            type="text"
            placeholder="할 일을 입력하세요."
          />
          <button className="form-button">추가</button>
        </form>
      </div>
      <ul>
        <TodoList
          isEditing={todo.isEditing}
          todoText={todo.todoText}
          handleTodoText={handleTodoText}
          handleIsEditing={handleIsEditing}
        />
      </ul>
    </div>
  );
}

export default App;
