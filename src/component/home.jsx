import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { observer } from 'mobx-react';

/* 引入自定义函数 */
import '../data/fetch-data';
import '../script/ramda-module';

/* 引入组件 */
import {
	MultiselectComp,
	DropdownListComp
} from './widget.jsx';
import {
	Demo,
	AddComp
} from './mui/demo.jsx';

import HomeData from '../store/home-data';

const homeData = new HomeData();

@observer
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let data = {
      'text': 'react + react router + mobx'
    };
    homeData.get_text(data);
  }

  render() {
    return (
      <div>
        <p>home page --- {homeData.num}</p>
        <p>{homeData.text}</p>
		<p>---------------------------------</p>
		<p>font-awesome 图标</p>
		<p>
			<i className='icon-suitcase icon-large'></i>
			&nbsp;&nbsp;
			<i className='icon-desktop icon-large'></i>
		</p>
		<p>---------------------------------</p>
		<p>bootstrap 自带图标</p>
		<p>
			<i className='glyphicon glyphicon-eur icon-large'></i>
			&nbsp;&nbsp;
			<i className='glyphicon glyphicon-trash icon-2x'></i>
		</p>
		<p>---------------------------------</p>
		<p>material design icons 图标</p>
		<p>
			<i className='material-icons'>group_work</i>
			&nbsp;&nbsp;
			<i className='material-icons'>flight_takeoff</i>
		</p>
		<p>---------------------------------</p>
		<p>react widgets 组件</p>
		<MultiselectComp />
		<DropdownListComp />
		<p>---------------------------------</p>
		<p>material-ui 组件</p>
		<Demo />
		<AddComp />
		<p>---------------------------------</p>
		<img src='/image/vva.jpeg' style={{width:'200px',height:'200px'}} />
		<p className='box'></p>
        <p>新版App Store在页面设计上明显更注重应用内容的直接展示。通过卡片式的视觉设计，单款应用的内容
		可以几乎占满整个屏幕。展示的信息量更大，用户获取应用信息的体验也将更加直观且详细。而且，苹果在每个
		应用的下方，还增加了一个社交分享按钮。通过点击，用户可以很方便地和其朋友分享某个应用的「故事」。
		而这无疑能够帮助开发者进一步推广其应用。</p>
        <Link to='/test'>进入test页面</Link>
      </div>
    );
  }
}

export default Home;
