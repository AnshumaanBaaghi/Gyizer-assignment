import React, { useContext } from "react";
import { TodoCardDesktop } from "./TodoCardDesktop";
import "../styles/TodoList.css";
import { Context } from "../context/Provider";
import { TodoCardMobile } from "./TodoCardMobile";
import { DeleteModal } from "./DeleteModal";
import { FromModal } from "./FromModal";

export const TodoList = () => {
  const {
    isSmallScreen,
    deleteTodoId,
    setDeleteTodoId,
    todos,
    updateTodoData,
  } = useContext(Context);
  const handleDelete = (id) => {
    console.log("id ah:", id);
    setDeleteTodoId(id);
  };

  return (
    <>
      <div className="Todos">
        {todos.length > 0 ? (
          <div className="TodosList">
            {todos.map((el) => (
              <React.Fragment key={el.id}>
                {isSmallScreen ? (
                  <TodoCardMobile handleDelete={handleDelete} {...el} />
                ) : (
                  <TodoCardDesktop handleDelete={handleDelete} {...el} />
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="noTask">
            <div></div>
            <div>No Tasks</div>
            <div></div>
          </div>
        )}
      </div>
      {deleteTodoId && <DeleteModal />}
      {updateTodoData && isSmallScreen && <FromModal />}
    </>
  );
};
