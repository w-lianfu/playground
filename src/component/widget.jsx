import React, { Component } from 'react';
import {Multiselect, DropdownList} from 'react-widgets';
import 'react-widgets/lib/less/react-widgets.less';

const colors = ['orange', 'red', 'blue', 'black', 'white'];

class MultiselectComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: colors.slice(0, 1)
		}
	}
	
	onChange(value) {
		console.log('value: ', value);
		this.setState({
			value: value
		})
	}
	
	render() {
		return (
			<div>
				<Multiselect data={colors}
					style={{width:'800px'}}
					value={this.state.value}
					onChange={this.onChange.bind(this)} />
			</div>
		);
	}
}

class DropdownListComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: colors[0]
		}
	}
	
	onChange(value) {
		console.log('value: ', value);
		this.setState({
			value: value
		})
	}
	
	render() {
		return (
			<DropdownList data={colors} 
				onChange={this.onChange.bind(this)}
				value={this.state.value}
				style={{width:'800px'}} />
		);
	}
}

export {
	MultiselectComp,
	DropdownListComp
};
