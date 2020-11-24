import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions';

const List = ({ todos, removeTodo }) => {
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => removeTodo(todo.id)}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => {
      dispatch(removeTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
