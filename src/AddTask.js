const AddTask = ({ values, setValues }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    const newTab = { ...values };
    newTab.inputValue = value;
    setValues(newTab);
  };
  return (
    <div className="addTask">
      <input placeholder="new task" type="text" onChange={handleChange}></input>
      <button
        onClick={() => {
          const obj = { ...values };
          obj.tasks.push({ task: obj.inputValue, isDone: false });
          setValues(obj);
        }}
      >
        Add task
      </button>
    </div>
  );
};

export default AddTask;
