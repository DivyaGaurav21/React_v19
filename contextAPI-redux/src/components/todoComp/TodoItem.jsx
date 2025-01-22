import React, { useState } from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(todo.text);

  const handleSaveTodo = () => {
    if (editingText.trim()) {
      onEdit({ id: todo.id, text: editingText });
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={handleSaveTodo}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
