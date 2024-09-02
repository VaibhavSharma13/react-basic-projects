// Slice added in name for the naming convention only
// reducers comes under slices

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Hello Todo" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);

      // another way to remove todo
      // state.todos.splice(todoId, 1);
    },
    updateTodo: (state, action) => {
      console.log(action);

      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo
      );
    },
  },
});

export const { addTodo, updateTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
