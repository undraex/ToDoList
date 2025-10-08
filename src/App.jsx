import { useState } from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");

  function handleAdd() {
    setTodos([...todos, { text: text, done: false }]);
    setText("");
  }
  function handleDelete() {}
  function handleToggle(text) {
    const newTodos = todos.map((todo) =>
      todo.text === text ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }
  const filteredTodos = todos.filter((todo) => {
    if (status === "active") return !todo.done;
    if (status === "completed") return todo.done;
    return true;
  });

  return (
    <div className="container">
      <div className="card">
        <p className="title inter">To-Do list</p>
        <div className="inputAndButton">
          <input
            className="input"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button className="addButton" onClick={handleAdd}>
            add
          </button>
        </div>
        <div>
          <div className="buttons inter">
            <button
              className="allButton"
              style={{
                backgroundColor: status === "all" ? "#3c82f6" : "",
                color: status === "all" ? "white" : "",
              }}
              onClick={() => setStatus("all")}
            >
              All
            </button>
            <button
              className="activeButton"
              style={{
                backgroundColor: status === "active" ? "#3c82f6" : "",
                color: status === "active" ? "white" : "",
              }}
              onClick={() => setStatus("active")}
            >
              Active
            </button>
            <button
              className="completeButton"
              style={{
                backgroundColor: status === "completed" ? "#3c82f6" : "",
                color: status === "completed" ? "white" : "",
              }}
              onClick={() => setStatus("completed")}
            >
              Completed
            </button>
          </div>

          <div>
            {filteredTodos.map((item, index) => {
              return (
                <Task index={index} item={item} handleToggle={handleToggle} />
              );
            })}
          </div>
        </div>
        <div className="inter text">No tasks yet. Add one above!</div>
        <div className="footerText inter">
          <div className="poweredBy">Powered by</div>
          <div className="pinecone">Pinecone academy</div>
        </div>
      </div>
    </div>
  );
}

export default App;
