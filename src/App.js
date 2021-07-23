import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState([[], []]);
  const handleChange = (event) => {
    const value = event.target.value;
    const newTab = [...values];
    newTab[0].push(value);
    setValues(newTab);
  };

  return (
    <div className="body-container">
      <header>
        <h1>ToDo List</h1>
      </header>
      <main>
        <div className="addTask">
          {/* Cette input permet de récuperer la task écrite */}
          <input
            placeholder="new task"
            type="text"
            onChange={handleChange}
          ></input>
          {/* Ce bouton permet de rajouter la task dans une liste*/}
          <button
            onClick={() => {
              let i = 0;
              for (; i <= values[0].length; i++) {
                if (values[0].length === i) {
                  const newTab = [...values];
                  newTab[1].push({ task: newTab[0][i - 1] });
                  setValues(newTab);
                }
              }
            }}
          >
            Add task
          </button>
        </div>
        <ul>
          {values[1].map((elem, index) => {
            return (
              <li key={index}>
                <input type="checkbox"></input>
                <span style={elem.task === values[1][index] ? "line" : ""}>
                  {elem.task}
                </span>
                <button
                  onClick={() => {
                    const newTab = [...values];
                    newTab[1].splice(index, 1);
                    setValues(newTab);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
