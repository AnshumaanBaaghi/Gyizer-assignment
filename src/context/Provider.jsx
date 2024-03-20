import { createContext, useEffect, useState } from "react";

export const Context = createContext();
const initialVal = [
  {
    id: 1,
    title: "Task Title 1",
    body: "task body about this task",
  },
  {
    id: 2,
    title: "Task Title 2",
    body: "task body about this task",
  },
  {
    id: 3,
    title: "Task Title 3",
    body: "task body about this task",
  },
  {
    id: 4,
    title: "Task Title 4",
    body: "task body about this task",
  },
  {
    id: 5,
    title: "Task Title 5",
    body: "task body about this task",
  },
  {
    id: 6,
    title: "Task Title 6",
    body: "task body about this task",
  },
  {
    id: 7,
    title: "Task Title 7",
    body: "task body about this task",
  },
];
export const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(initialVal);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [deleteTodoId, setDeleteTodoId] = useState("");
  const [updateTodoData, setUpdateTodoData] = useState("");

  const deleteTodo = () => {
    const updatedTodo = todos.filter((el) => el.id != deleteTodoId);
    setTodos(updatedTodo);
    setDeleteTodoId("");
  };

  const addOrUpdateTodo = (obj) => {
    if (updateTodoData) {
      const updatedTodo = todos.map((el) =>
        el.id == updateTodoData.id ? obj : el
      );
      setTodos(updatedTodo);
    } else {
      const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      setTodos([...todos, { ...obj, id }]);
    }
    setUpdateTodoData("");
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const values = {
    isSmallScreen,
    deleteTodoId,
    todos,
    updateTodoData,
    setDeleteTodoId,
    deleteTodo,
    addOrUpdateTodo,
    setUpdateTodoData,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
