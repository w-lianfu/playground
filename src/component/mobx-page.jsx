import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { mobxData } from '../store/mobx-page';
import {
	BackButton,
	MyButton
} from './styled.jsx';
import { fu } from '../script/fu';

@observer
class MobxPage extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		let data = {'one': 'react'};
		mobxData.get_list(data);
	}
	/*
	componentWillUnmount() {
		mobxData.reset();
	}
	*/
	
	componentWillReact() {
		// 每次改变数据时都会触发此函数
	}
	
	increment() {
		mobxData.count_add();
		fu.increment();
	}
	
	decrement() {
		mobxData.count_minus();
		fu.decrement();
	}
	
	back() {
		this.props.history.goBack();
	}
	
	render() {
		return (
			<div>
			  <p>{mobxData.count}</p>
				<p>{fu.count}</p>
			  <p><MyButton onClick={this.increment.bind(this)}>Increment</MyButton></p>
			  <p><MyButton onClick={this.decrement.bind(this)}>Decrement</MyButton></p>
			  <p><BackButton onClick={this.back.bind(this)}>Back</BackButton></p>
			</div>
		);
	}
}

export {
	MobxPage
}
