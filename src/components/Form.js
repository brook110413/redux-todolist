import React, { useState } from 'react';
import { createTodo } from '../actions';
import { connect } from 'react-redux';

const Form = ({ createTodo }) => {
  const [text, setText] = useState('');

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
    createTodo(text);
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

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (text) => {
      dispatch(createTodo(text));
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);
