import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({ title: "", isDone: false });
  const handleChange = (event) => {
    const value = event.target.value;
    const newObj = { ...values };
    newObj.title = value;
    setValues(newObj);
  };
  return (
    <div className="body-container">
      <header>
        <h1>ToDo List</h1>
      </header>
      <main>
        {/* Cette input permet de récuperer la task écrite */}
        <input
          placeholder="new task"
          type="text"
          onChange={handleChange}
        ></input>
        {/* Ce bouton permet de rajouter la task dans une liste*/}
        <button
          onClick={() => {
            console.log(values);
          }}
        >
          Add task
        </button>
      </main>
    </div>
  );
}

export default App;
