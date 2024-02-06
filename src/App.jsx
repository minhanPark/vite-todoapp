import { useState } from "react";

import "./App.css";
import TodoList from "./components/todo-list";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: "uniqueId1",
      todoText: "리액트 배우기",
      isEditing: false,
    },
    {
      id: "uniqueId2",
      todoText: "타입스크립트 배우기",
      isEditing: false,
    },
  ]);
  const handleIsEditingInList = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isEditing: !todo.isEditing,
        };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const handleTodoTextInList = (e, id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          todoText: e.target.value,
        };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const deleteTodoInList = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
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
        {todoList.map((todo) => (
          <TodoList
            key={todo.id}
            isEditing={todo.isEditing}
            todoText={todo.todoText}
            handleTodoText={(e) => handleTodoTextInList(e, todo.id)}
            handleIsEditing={() => handleIsEditingInList(todo.id)}
            handleDeleteTodo={() => deleteTodoInList(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
