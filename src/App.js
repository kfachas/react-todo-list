import "./App.css";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashRestore, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrashRestore, faListAlt);

function App() {
  const [values, setValues] = useState({
    inputValue: "",
    tasks: [],
    darkmonde: false,
  });
  // premier tableau pour ce que l'utilisateur entre dans l'input
  // second tableau pour push la task de l'utilisateur
  // dernier tableau pour la vérification si l'utilisateur à coché la task ou non
  const handleChange = (event) => {
    const value = event.target.value;
    const newTab = { ...values };
    newTab.inputValue = value;
    setValues(newTab);
  };
  if (values.darkmode === false) {
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
              const newTab = { ...values };
              newTab.tasks.push({ task: newTab.inputValue, isDone: 0 });
              console.log(newTab.tasks);
              setValues(newTab);
            }}
          >
            Add task
          </button>
        </div>
        <ul>
          {values.tasks.map((elem, index) => {
            // const newTab = [...values];
            // if (newTab[1][index].isDone === 1) {
            //   newTab[1].splice(index, 1);
            //   newTab[1].unshift(elem);
            // }
            return (
              <li key={index}>
                {/* Cette input permet de checker si l'utilisateur a accompli sa task ou non */}
                <input
                  type="checkbox"
                  onClick={() => {
                    const newTab = { ...values };
                    if (newTab.tasks[index].isDone === 0) {
                      newTab.tasks[index].isDone = 1;
                    } else {
                      newTab.tasks[index].isDone = 0;
                    }
                    setValues(newTab);
                  }}
                ></input>
                <span
                  className={values.tasks[index].isDone === 1 ? "line" : ""}
                >
                  {elem.task}
                </span>
                <FontAwesomeIcon
                  icon="trash-restore"
                  color="blueviolet"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    const newTab = { ...values };
                    newTab.tasks.splice(index, 1);
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
            const newTab = { ...values };
            if (newTab.darkmode === false) {
              newTab.darkmode = true;
            } else {
              newTab.darkmode = false;
            }
            setValues(newTab);
          }}
        >
          {values.darkmode === false ? "WANT LIGHTMODE ?" : "WANT DARKMODE ?"}
        </button>
        <span>
          Made at{" "}
          <a href="https://lereacteur.io" target="_blank">
            Le Reacteur
          </a>{" "}
          by{" "}
          <a href="https://github.com/kfachas" target="_blank">
            Kevin Fachas
          </a>{" "}
          - 2021
        </span>
      </footer>
    </div>
  );
}

export default App;
