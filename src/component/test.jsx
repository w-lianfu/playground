import React, { Component } from 'react';

import {
	DatePickerComp
} from './antd.jsx';
import {
	CollapseComp
} from './reactstrap.jsx';

class Test extends Component {
  constructor(props) {
    super(props);
  }
  
  onChange(date, dateString) {
    console.log(date, dateString);
  }
  
  render() {
    return (
      <div>
        <p>test page</p>
		<p>---------------------------------</p>
		<p>ant disign 组件</p>
		<DatePickerComp />
		<p>---------------------------------</p>
		<p>reactstrap 组件</p>
		<CollapseComp />
      </div>
    );
  }
}

export default Test;
