import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";
import CreateTodo from "./components/CreateTodo";
import { useState, useEffect } from "react";
import { config } from "./config";
import axios from "axios";
function App() {
  const baseUrl = config.baseurl;
  const [todos, setTodoList] = useState([]);

  const fetchList = async () => {
    const data = await axios.get(baseUrl);
    setTodoList(data.data);
  };

  const setCompleted = async (todo) => {
    todo.completed = true;
    todo.isCompleted = true;
    await axios.put(baseUrl + "/" + todo.id, { ...todo });
    await fetchList();
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div>
        <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TODO APP</h1>
      <div className="card">
        <CreateTodo fetchList={fetchList} />
      </div>
      <div className="card">
        {/* <section>
          {todos.map((todoItem) => {
            return (
              <article key={todoItem.id}>
                <h4>{todoItem.name}</h4>
                <p>status: {todoItem.isCompleted ? "Yes" : "No"}</p>
              </article>
            );
          })}
        </section> */}
        <List todos={todos} setCompleted={setCompleted}></List>
        <p></p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
