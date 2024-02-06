import "./App.css";
import { useState } from "react";

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
        <li className="todo-list">
          {todo.isEditing ? (
            <>
              <input
                className="todo-list-text"
                value={todo.todoText}
                onChange={handleTodoText}
              />
              <button onClick={handleIsEditing} className="todo-list-button">
                수정
              </button>
            </>
          ) : (
            <>
              <p className="todo-list-text">{todo.todoText}</p>
              <div className="">
                <button onClick={handleIsEditing} className="todo-list-button">
                  수정
                </button>
                <button className="todo-list-button">삭제</button>
              </div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default App;
