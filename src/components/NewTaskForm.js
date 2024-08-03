import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({
      text: "",
      category: "Code",
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={handleInputChange}
          value={formData.category}
        >
          {categories
            .filter((category) => category !== "All")
            .map((category) => {
              return <option key={category}>{category}</option>;
            })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
