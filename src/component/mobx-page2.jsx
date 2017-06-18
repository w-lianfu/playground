import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { mobxData } from '../store/mobx-page';
import {
	BackButton,
	MyButton
} from './styled.jsx';

// const mobxData = new MobxData();

@observer
class MobxPage2 extends Component {
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
	}
	
	decrement() {
		mobxData.count_minus();
	}
	
	back() {
		this.props.history.goBack();
	}
	
	render() {
		return (
			<div>
			  <p>mobx page2页面</p>
			  <p>{mobxData.count}</p>
			  <p><MyButton onClick={this.increment.bind(this)}>Increment</MyButton></p>
			  <p><MyButton onClick={this.decrement.bind(this)}>Decrement</MyButton></p>
			  <p><BackButton onClick={this.back.bind(this)}>Back</BackButton></p>
			</div>
		);
	}
}

export {
	MobxPage2
}
