import React, { useState } from 'react';

const AddTodoForm = ({ onAdd }) => {
  const [newTodoText, setNewTodoText] = useState('');

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = {
        id: Math.random(), // Generate unique ID
        text: newTodoText,
      };
      onAdd(newTodo);  // Call the onAdd prop to add a new todo
      setNewTodoText('');  // Clear input field
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Todo"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodoForm;
