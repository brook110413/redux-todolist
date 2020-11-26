import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../actions';

const List = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => dispatch(removeTodo(todo.id))}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
