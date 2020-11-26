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
  return (
    <Provider store={store}>
      <div>
        <Title />
        <Form />
        <List />
      </div>
    </Provider>
  );
};

export default App;
