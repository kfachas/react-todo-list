import ToDoItem from "./ToDoItem";
import AddTask from "./AddTask";
const Main = ({ values, setValues }) => {
  return (
    <main>
      <AddTask values={values} setValues={setValues} />
      <ul>
        {values.tasks.map((elem, index) => {
          const obj = { ...values };
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
