const AddTask = ({ values, setValues }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    const newTab = { ...values };
    newTab.inputValue = value;
    setValues(newTab);
  };
  return (
    <div className="addTask">
      {/* Cette input permet de récuperer la task écrite */}
      <input placeholder="new task" type="text" onChange={handleChange}></input>
      {/* Ce bouton permet de rajouter la task dans une liste*/}
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
