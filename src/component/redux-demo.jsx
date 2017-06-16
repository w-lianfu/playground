import React, { Component } from 'React';
import {
	createStore
} from 'redux';

import {
	BackButton,
	MyButton
} from './styled.jsx';

function counter(state = 0, action) {
	switch(action.type) {
	case 'INCREMENT':
		return state + 1;
	case 'DECREMENT':
		if(state === 0) return 0;
		return state - 1;
	case 'reset':
		return 0;
	default:
		return state;
	}
}

const store = createStore(counter);

store.subscribe(() => {
	// console.log(store.getState());
});

class ReduxDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		this.setValue = this.setValue.bind(this);
	}
	
	componentWillUnmount() {
		store.dispatch({ type: 'reset' })
	}
	
	setValue() {
		this.setState({
			count: store.getState()
		});
	}
	
	increment() {
		store.dispatch({ type: 'INCREMENT' });
		this.setValue();
	}
	
	decrement() {
		store.dispatch({ type: 'DECREMENT' });
		this.setValue();
	}
	
	back() {
		this.props.history.goBack();
	}
	
	render() {
		return (
			<div>
			  <p>{this.state.count}</p>
			  <p><MyButton onClick={this.increment.bind(this)}>Increment</MyButton></p>
			  <p><MyButton onClick={this.decrement.bind(this)}>Decrement</MyButton></p>
		    <p><BackButton onClick={this.back.bind(this)}>返回</BackButton></p>
			</div>
		);
	}
}

export {
	ReduxDemo
}
