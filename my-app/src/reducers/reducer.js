export const intitialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
  ]
}

export const toDoReducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...intitialState.todos, action.payload]
      }
    default:
      return state
  }
}

