import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slices/todo";
import { TextField, Button, Box } from "@mui/material";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addtodohandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <TextField
        label="New Todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <Button
        variant="contained"
        onClick={addtodohandler}
        sx={{ marginLeft: "10px" }}
      >
        Add Todo
      </Button>
    </Box>
  );
};

export default TodoInput;
