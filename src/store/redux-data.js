import { createStore } from 'redux';

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

dispatch(addTodo(text))

const boundAddTodo = (text) => dispatch(addTodo(text));

boundAddTodo(text);































/*
function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

let store = createStore(counter);

store.subscribe(() => 
  console.log(store.getState());
);

store.dispatch({ type: 'INCREMENT' })
*/




