import React from 'react';
import { connect } from 'react-redux';

const Title = ({ todos }) => {
  return (
    <div>
      <h2>代辦事項清單({todos.length})</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(Title);
