import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashRestore, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrashRestore, faListAlt);

function App() {
  const [values, setValues] = useState({
    inputValue: "",
    tasks: [],
    lightmode: true,
  });

  if (values.lightmode === false) {
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
  return (
    <div>
      <Header />
      <Main values={values} setValues={setValues} />
      <Footer values={values} setValues={setValues} />
    </div>
  );
}

export default App;
