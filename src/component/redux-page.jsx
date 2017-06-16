import React, { Component } from 'react';
import {
	createStore
} from 'redux';

import {
	BackButton,
	MyButton
} from './styled.jsx';
import {
	incrementCount,
	decrementCount,
	getState,
	reset
} from '../redux-store/store';

class ReduxPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: 0
		}
	}
	
	componentWillUnmount() {
		reset();
	}
	
	increment() {
		incrementCount();
		this.setState({
			num: getState()
		})
	}
	
	back() {
		this.props.history.goBack();
	}
	
	render() {
		return (
			<div>
				<p>{this.state.num}</p>
				<p><MyButton onClick={this.increment.bind(this)}>Increment</MyButton></p>
				<BackButton onClick={this.back.bind(this)}>返回</BackButton>
			</div>
		);
	}
}

export {
	ReduxPage
}
