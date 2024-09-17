import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Slices/todo";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <ListItemText primary={todo.text} />
          <IconButton onClick={() => dispatch(removeTodo(todo.id))}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
