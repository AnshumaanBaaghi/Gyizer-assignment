import React, { useContext } from "react";
import "../styles/DeleteModal.css";
import { Context } from "../context/Provider";
export const DeleteModal = () => {
  const { deleteTodo, setDeleteTodoId } = useContext(Context);
  console.log("deleteTodo:", deleteTodo);
  return (
    <div className="deleteModal">
      <div>
        <div className="line"></div>
        <p className="deletetask">Delete this task?</p>
        <span className="deleteButtons">
          <button onClick={deleteTodo}>Yes</button>
          <button onClick={() => setDeleteTodoId("")}>No</button>
        </span>
      </div>
    </div>
  );
};
