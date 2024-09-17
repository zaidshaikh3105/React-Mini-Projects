// import TodoInput from "./components/addTodo";
import TodoList from "./components/todoList";
import TodoInput from "./components/addTodo";
import { Typography, Box } from "@mui/material";
const TodoApp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "60vh",
        background: "linear-gradient(to right,#ff6e7f, #bfe9ff)",
        width: "100vw",
        padding: "10px",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          width: "100%",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "#efebe9",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Redux Todo App
        </Typography>
        <TodoInput />
        <TodoList />
      </Box>
    </div>
  );
};

export default TodoApp;
