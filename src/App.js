import "./App.css";
import { useState } from "react";
import Header from "./Header";
import SearchTask from "./SearchTask";
import Main from "./Main";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashRestore, faListAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashRestore, faListAlt);

function App() {
  const [values, setValues] = useState({
    inputValue: "",
    tasks: [],
    lightmode: true,
  });

  if (values.lightmode === false) {
    document.body.style.background = "rgb(40, 39, 39)";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
  return (
    <div>
      <Header />
      <SearchTask />
      <Main values={values} setValues={setValues} />
      <Footer
        values={values}
        setValues={setValues}
        lightmode={values.lightmode}
      />
    </div>
  );
}

export default App;
