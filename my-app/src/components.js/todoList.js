import React, { useReducer } from "react";
import { toDoReducer, intitialState } from '../reducers/reducer'

import Todo from '../components.js/todo'

const TodoList = () => {

  const [state, dispatch] = useReducer(toDoReducer, intitialState)
  console.log('state', state)

  const addTodo = e => {

  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" />
        <button>Add to do</button>
      </form>
      {state.todos.map(todo => <Todo key={todo} todo={todo} />)}
      <button>Clear todos</button>
    </div>
  );
};

export default TodoList;
