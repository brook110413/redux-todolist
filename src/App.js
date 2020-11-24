import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import { createStore } from 'redux';
import todoReducer from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 0,
  //     text: '吃早餐',
  //   },
  //   {
  //     id: 1,
  //     text: '上學',
  //   },
  //   {
  //     id: 2,
  //     text: '吃午餐',
  //   },
  // ]);

  // const [id, setId] = useState(3);

  // const createTodo = (text) => {
  //   setTodos([...todos, { id, text }]);
  //   setId(id + 1);
  // };

  // const removeTodo = (id) => {
  //   setTodos(todos.filter((todo) => id !== todo.id));
  // };

  return (
    <Provider store={store}>
      <div>
        {/* <Title todos={todos} />
        <Form createTodo={(text) => createTodo(text)} />
        <List todos={todos} removeTodo={(id) => removeTodo(id)} /> */}
        <Title />
        <Form />
        <List />
      </div>
    </Provider>
  );
};

export default App;
