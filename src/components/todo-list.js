import TodoListItem from "./todo-list-item";

const TodoList = (props) => {
  return(
    <ul>
      <li><TodoListItem label="Create Awesome App"/></li>
      <li><TodoListItem label="Drink Dr. Pepper" important/></li>
      </ul>
  );
};

export default TodoList;