import ToDoItem from "./ToDoItem";
import AddTask from "./AddTask";
const Main = ({ values, setValues }) => {
  return (
    <main>
      <AddTask values={values} setValues={setValues} />
      <ul>
        {values.tasks.map((elem, index) => {
          const obj = { ...values };
          if (elem.isDone === false) {
            values.tasks.splice(index, 1);
            values.tasks.unshift(elem);
          } else {
            values.tasks.splice(index, 1);
            values.tasks.push(elem);
          }
          return (
            <ToDoItem
              key={index}
              index={index}
              values={obj}
              setValues={setValues}
              elem={elem}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default Main;
