import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todoMsg: 'todo msg',
        completed: false
        }
    ],
    addTodo: (todoMsg) =>  {},
    updateTodo: (id, todoMsg) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}