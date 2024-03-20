import React, { useContext, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import "../styles/Form.css";
import { Context } from "../context/Provider";
export const Form = () => {
  const { updateTodoData, addOrUpdateTodo, isSmallScreen } =
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
  useEffect(() => {
    if (!isSmallScreen && updateTodoData) {
      setFormData({
        title: updateTodoData.title,
        body: updateTodoData.body,
      });
    }
  }, [updateTodoData]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title..."
          value={formData.title}
          required
        />
        {!isSmallScreen && updateTodoData ? (
          <textarea
            name="body"
            onChange={handleChange}
            rows="4"
            cols="50"
            value={formData.body}
            required
          ></textarea>
        ) : (
          <input
            onChange={handleChange}
            name="body"
            type="text"
            placeholder={"Input..."}
            value={formData.body}
            required
          />
        )}
      </div>

      {!isSmallScreen && updateTodoData ? (
        <button type="submit" className="update">
          <span>UPDATE</span>
        </button>
      ) : (
        <button type="submit">
          <FiPlus />
        </button>
      )}
    </form>
  );
};
