import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul className="flow" role="list">
      {
        // eslint-disable-next-line react/prop-types
        props.todoList.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))
      }
    </ul>
  );
}

export default TodoList;
