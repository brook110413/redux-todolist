import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../actions';

const Form = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleCreateTodo();
    }
  };

  const handleCreateTodo = () => {
    if (!text) {
      return;
    }
    dispatch(createTodo(text));
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={text}
      />
      <button onClick={handleCreateTodo}>新增</button>
    </div>
  );
};

export default Form;
