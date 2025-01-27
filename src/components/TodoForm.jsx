function TodoForm(props) {
  return (
    <fieldset>
      <legend>Add a task</legend>
      <input
        type="text"
        name="todo"
        value={props.todo}
        id="todo-input"
        onChange={props.handleChange}
        placeholder="e.g. Walk the dog"
      />
      <button onClick={props.handleClick}>Add Todo</button>
    </fieldset>
  );
}

export default TodoForm;
