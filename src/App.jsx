import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <h1 className="header">Vite Todo App</h1>
      <ul>
        <li className="todo-list">
          <p className="todo-list-text">리액트 배우기</p>
          <div className="">
            <button className="todo-list-button">수정</button>
            <button className="todo-list-button">삭제</button>
          </div>
        </li>
        <li className="todo-list">
          <input className="todo-list-text" value="수정할 때 나타나는 텍스트" />
          <button className="todo-list-button">수정</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
