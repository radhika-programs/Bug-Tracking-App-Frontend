import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Understand Keys', completed: false },
    { id: 3, text: 'Build Projects', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [nextId, setNextId] = useState(4);

  function handleAddTodo() {
    if (newTodo.trim()) {
      setTodos([...todos, { id: nextId, text: newTodo, completed: false }]);
      setNextId(nextId + 1);
      setNewTodo('');
    }
  }

  function handleToggleTodo(id) {
    setTodos(todos.map(function(todo) {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter(function(todo) {
      return todo.id !== id;
    }));
  }

  function handleMoveUp(index) {
    if (index > 0) {
      const newTodos = [...todos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index - 1];
      newTodos[index - 1] = temp;
      setTodos(newTodos);
    }
  }

  function handleMoveDown(index) {
    if (index < todos.length - 1) {
      const newTodos = [...todos];
      const temp = newTodos[index];
      newTodos[index] = newTodos[index + 1];
      newTodos[index + 1] = temp;
      setTodos(newTodos);
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>React Keys Demo - Todo List</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={function(e) { setNewTodo(e.target.value); }}
          onKeyPress={function(e) { if (e.key === 'Enter') handleAddTodo(); }}
          placeholder="Add a new todo..."
          style={{ flex: 1, padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button 
          onClick={handleAddTodo}
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>

      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        {todos.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999' }}>No todos yet. Add one above!</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {todos.map(function(todo, index) {
              return (
                <li 
                  key={todo.id}
                  style={{ 
                    padding: '15px', 
                    marginBottom: '10px', 
                    backgroundColor: 'white', 
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={function() { handleToggleTodo(todo.id); }}
                    style={{ cursor: 'pointer' }}
                  />
                  
                  <span style={{ 
                    flex: 1, 
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#999' : '#333'
                  }}>
                    {todo.text}
                  </span>

                  <button 
                    onClick={function() { handleMoveUp(index); }}
                    disabled={index === 0}
                    style={{ 
                      padding: '5px 10px', 
                      cursor: index === 0 ? 'not-allowed' : 'pointer',
                      opacity: index === 0 ? 0.5 : 1,
                      backgroundColor: '#2196F3',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px'
                    }}
                  >
                    ↑
                  </button>

                  <button 
                    onClick={function() { handleMoveDown(index); }}
                    disabled={index === todos.length - 1}
                    style={{ 
                      padding: '5px 10px', 
                      cursor: index === todos.length - 1 ? 'not-allowed' : 'pointer',
                      opacity: index === todos.length - 1 ? 0.5 : 1,
                      backgroundColor: '#2196F3',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px'
                    }}
                  >
                    ↓
                  </button>

                  <button 
                    onClick={function() { handleDeleteTodo(todo.id); }}
                    style={{ 
                      padding: '5px 10px', 
                      backgroundColor: '#f44336', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>🔑 Why Keys Matter Here:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Each todo uses <code>key={'{'}todo.id{'}'}</code> - a unique, stable identifier</li>
          <li>When you reorder items (↑↓), React knows which components to move</li>
          <li>Checkbox states stay with the correct todos because of proper keys</li>
          <li>Try removing the key prop and using index instead - you'll see bugs!</li>
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
