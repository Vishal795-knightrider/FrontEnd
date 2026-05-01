import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtodo, deletetodo, toogle } from "../redux/action";

const Todo = () => {
  const todos = useSelector(state => state.todos); 


  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addtodo(input)); 
      
      setInput('');
    }
  };

  const handleDelete = (id) => {
    dispatch(deletetodo(id)); 
  };

  const handleToggle = (id) => {
    dispatch(toogle(id)); 
  };

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new todo"
      />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => handleToggle(todo.id)}>Toggle</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;