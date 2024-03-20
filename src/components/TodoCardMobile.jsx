import React, { useContext, useState } from "react";
import "../styles/TodoCard.css";
import { IoIosInformation } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Context } from "../context/Provider";
import { IoMdShare } from "react-icons/io";

export const TodoCardMobile = ({ handleDelete, title, body, id }) => {
  const { updateTodoData, setUpdateTodoData } = useContext(Context);
  const [showInfo, setShowInfo] = useState(false);

  const handleEdit = () => {
    setUpdateTodoData({ title, body, id });
  };
  return (
    <div>
      <div className="TodoCard">
        <div className="todoContent" onClick={() => setShowInfo((pre) => !pre)}>
          <span>{title}</span>
          <span>{body}</span>
        </div>
        <button className="icon cross" onClick={() => handleDelete(id)}>
          <RxCross2 />
        </button>
      </div>
      {showInfo && (
        <div className="card-icons">
          {updateTodoData && (
            <button className={`icon`}>
              <IoMdShare />
            </button>
          )}
          <button className={`icon info`}>
            <IoIosInformation />
          </button>
          <button className="icon edit" onClick={handleEdit}>
            <MdEdit />
          </button>
        </div>
      )}
    </div>
  );
};
