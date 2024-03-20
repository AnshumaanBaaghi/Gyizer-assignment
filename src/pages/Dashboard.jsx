import React from "react";
import { Navbar } from "../components/Navbar";
import { TodoList } from "../components/TodoList";
import { Form } from "../components/Form";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Form />
      <TodoList />
    </>
  );
};
