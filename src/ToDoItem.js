import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ToDoItem = ({ index, values, setValues, elem }) => {
  return (
    <li>
      {/* Cette input permet de checker si l'utilisateur a accompli sa task ou non */}
      <input
        type="checkbox"
        onClick={() => {
          if (elem.isDone === false) {
            values.tasks[index].isDone = true;
          } else {
            values.tasks[index].isDone = false;
          }
          setValues(values);
        }}
      ></input>
      <span className={elem.isDone === true ? "line" : ""}>{elem.task}</span>
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
};

export default ToDoItem;
