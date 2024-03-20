import React, { useContext, useState } from "react";
import "../styles/FormModal.css";
import { Context } from "../context/Provider";

export const FromModal = () => {
  const { updateTodoData, addOrUpdateTodo, setUpdateTodoData } =
    useContext(Context);
  const [formData, setFormData] = useState({
    title: updateTodoData?.title || "",
    body: updateTodoData?.body || "",
  });

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateTodo(formData);
    setFormData({ title: "", body: "" });
  };
  const handleCancel = () => {
    setUpdateTodoData("");
  };
  return (
    <div className="formModal">
      <div className="formModalBox">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={handleChange}
              name="title"
              type="text"
              placeholder="Title..."
              value={formData.title}
              required
            />

            <textarea
              name="body"
              onChange={handleChange}
              rows="4"
              cols="50"
              value={formData.body}
              required
            ></textarea>
            <div className="formModalButtons">
              <button onClick={handleCancel}>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
