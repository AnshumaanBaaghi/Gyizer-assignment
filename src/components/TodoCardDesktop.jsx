import React, { useContext, useState } from "react";
import "../styles/TodoCard.css";
import { IoIosInformation } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../context/Provider";

export const TodoCardDesktop = ({ handleDelete, title, body, id }) => {
  const { updateTodoData, setUpdateTodoData, isSmallScreen } =
    useContext(Context);
  const [showInfo, setShowInfo] = useState(false);

  const handleEdit = () => {
    setUpdateTodoData({ title, body, id });
  };

  return (
    <>
      <div className="TodoCard">
        <div className="todoContent">
          <span>{title}</span>
          <span>{body}</span>
        </div>
        <div className="card-icons">
          {showInfo ? (
            <>
              <button
                onClick={handleEdit}
                className={`icon edit ${
                  !isSmallScreen && updateTodoData.id == id && "active"
                }`}
              >
                <MdEdit />
              </button>
              <button className="icon cross" onClick={() => handleDelete(id)}>
                <RxCross2 />
              </button>
            </>
          ) : (
            <button className="icon info" onClick={() => setShowInfo(true)}>
              <IoIosInformation />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
