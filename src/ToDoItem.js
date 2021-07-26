import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ToDoItem = ({ index, values, setValues, elem }) => {
  return (
    <li>
      <input
        type="checkbox"
        onClick={() => {
          const obj = { ...values };
          if (elem.isDone === false) {
            obj.tasks[index].isDone = true;
            obj.tasks.splice(index, 1);
            obj.tasks.push(elem);
          } else {
            obj.tasks[index].isDone = false;
            obj.tasks.splice(index, 1);
            obj.tasks.unshift(elem);
          }
          setValues(obj);
        }}
        checked={values.tasks[index].isDone}
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
