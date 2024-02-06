import "./index.css";

export default function TodoList({
  isEditing,
  todoText,
  handleTodoText,
  handleIsEditing,
  handleDeleteTodo,
}) {
  return (
    <li className="todo-list">
      {isEditing ? (
        <>
          <input
            className="todo-list-text"
            value={todoText}
            onChange={handleTodoText}
          />
          <button onClick={handleIsEditing} className="todo-list-button">
            수정
          </button>
        </>
      ) : (
        <>
          <p className="todo-list-text">{todoText}</p>
          <div className="">
            <button onClick={handleIsEditing} className="todo-list-button">
              수정
            </button>
            <button onClick={handleDeleteTodo} className="todo-list-button">
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
}
