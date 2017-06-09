import React, { Component } from 'react';

/* 引入自定义组件 */
import {
	DatePickerComp
} from './antd.jsx';
import {
	CollapseComp
} from './reactstrap.jsx';
import {
	BackButton
} from './styled.jsx';

class Test extends Component {
  constructor(props) {
    super(props);
  }
  
  onChange(date, dateString) {
    console.log(date, dateString);
  }
  
  back() {
	  this.props.history.goBack();
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
		<BackButton onClick={this.back.bind(this)}>返回</BackButton>
      </div>
    );
  }
}

export default Test;
