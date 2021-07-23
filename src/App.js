import "./App.css";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashRestore, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrashRestore, faListAlt);

function App() {
  const [values, setValues] = useState([[], [], [0]]);
  const handleChange = (event) => {
    const value = event.target.value;
    const newTab = [...values];
    newTab[0].push(value);
    setValues(newTab);
  };
  if (values[3] === 0) {
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
  return (
    <div>
      <header>
        <FontAwesomeIcon icon="list-alt" color="blueviolet" />
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
                  newTab[1].push({ task: newTab[0][i - 1], isDone: 0 });
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
            // const newTab = [...values];
            // if (newTab[1][index].isDone === 1) {
            //   newTab[1].splice(index, 1);
            //   newTab[1].unshift(elem);
            // }
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => {
                    const newTab = [...values];
                    if (newTab[1][index].isDone === 0) {
                      newTab[1][index].isDone = 1;
                    } else {
                      newTab[1][index].isDone = 0;
                    }
                    setValues(newTab);
                  }}
                ></input>
                <span className={values[1][index].isDone === 1 ? "line" : ""}>
                  {elem.task}
                </span>
                <FontAwesomeIcon
                  icon="trash-restore"
                  color="blueviolet"
                  onClick={() => {
                    const newTab = [...values];
                    newTab[1].splice(index, 1);
                    setValues(newTab);
                  }}
                ></FontAwesomeIcon>
              </li>
            );
          })}
        </ul>
      </main>
      <footer>
        <button
          onClick={() => {
            const newTab = [...values];
            console.log(newTab[3]);
            if (newTab[3] === 0) {
              newTab[3] = 1;
            } else {
              newTab[3] = 0;
            }
            setValues(newTab);
          }}
        >
          {values[3] === 0 ? "DARKMODE" : "LIGHTMODE"}
        </button>
      </footer>
    </div>
  );
}

export default App;
