import React, { Component } from 'react';
import {
	DatePicker
} from 'antd';

import 'antd/dist/antd.css';

const {
	MonthPicker,
	RangePicker
} = DatePicker;

class DatePickerComp extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}
	
	onChange(date, dateString) {
		console.log(date, dateString);
	}
	
	render() {
		return (
			<div>
				<DatePicker onChange={this.onChange} /><br />
				<MonthPicker onChange={this.onChange} /><br />
				<RangePicker onChange={this.onChange} />
			</div>
		);
	}
}

export {
	DatePickerComp
};
