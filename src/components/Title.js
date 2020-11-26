import React from 'react';
import { useSelector } from 'react-redux';

const Title = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>代辦事項清單({todos.length})</h2>
    </div>
  );
};

export default Title;
