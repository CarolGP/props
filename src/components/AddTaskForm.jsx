import { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === '') return;

    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default AddTaskForm;