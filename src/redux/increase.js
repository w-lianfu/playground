import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

class Counter extends Component {
	render() {
		let { count, increaseClick } = this.props;
		return (
			<div>
				<p><span>统计：{value}</span></p>
				<p><button onClick={increaseClick}>Increase</button></p>
			</div>
		);
	}
}

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	increaseClick: PropTypes.func.isRequired
}

let increaseAction = { type: 'increase' }

function mapStateToProps(state) {
	return {
		count: state.count
	}
}

function mapDispatchToProps(dispatch) {
	return {
		increaseClick: () => dispatch(increaseAction)
	}
}

function counter(state = { count: 0 }, action) {
	let count = state.count;
	switch(action.type) {
	    case 'increase':
		    return { count: count++ };
		default:
			return state;
	}
}

// store
const store = createStore(counter);

const IncreaseBox = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);

export {
	IncreaseBox
}

