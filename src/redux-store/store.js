import { createStore } from 'redux';

function counter(state = 0, action) {
	switch(action.type) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return 0;
		default:
			return state;
	}
}

let store = createStore(counter);

let incrementCount = () => {
	store.dispatch({ type: 'increment' });
}


let decrementCount = () => {
	store.dispatch({ type: 'decrement' })
}

let getState = () => {
	return store.getState();
}

let reset = () => {
	store.dispatch({ type: 'reset' })
}

store.subscribe(() => {
	// console.log(store.getState());
})

export {
	incrementCount,
	decrementCount,
	getState,
	reset
}
