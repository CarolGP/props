const Task = ({ id, text, completed, deleteTask, toggleTask }) => {
  return (
    <div>
      <span
        onClick={() => toggleTask(id)}
        style={{
          textDecoration: completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
      >
        {text}
      </span>

      <button onClick={() => deleteTask(id)}>
        Borrar
      </button>
    </div>
  );
};

export default Task;