const initState = {
  todos: [
    {
      id: 0,
      text: '吃早餐',
    },
    {
      id: 1,
      text: '上學',
    },
    {
      id: 2,
      text: '吃午餐',
    },
  ],
  currId: 2,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      const id = state.currId + 1;
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id,
            text: action.text,
          },
        ],
        currId: id,
      });
    case 'REMOVE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      });

    default:
      return state;
  }
};

export default todoReducer;
