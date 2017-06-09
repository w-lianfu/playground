import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
	Collapse,
	Button,
	CardBlock,
	Card
} from 'reactstrap';

class CollapseComp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false
		}
	}
	
	toggle() {
		this.setState({
			collapse: !this.state.collapse
		})
	}
	
	render() {
		return (
			<div>
				<Button color='primary' 
					onClick={this.toggle.bind(this)}>
					Toggle
				</Button>
				<Collapse isOpen={this.state.collapse} style={{width:'800px'}}>
					<Card>
						<CardBlock>
							<p>近几年，亚洲科技创业和投资一直处于加速状态，早已成为世界上科技创新最活跃的地区之一，
							无疑中国是其中科技发展最迅猛的国家，投资也最活跃。备受追捧的后起之秀印度，虽然在
							科技领域的投资数量与中国相当，但金额则相对较少。</p>
							<p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus 
				 			terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer 
							labore wes anderson cred nesciunt sapiente ea proident.</p>
						</CardBlock>
					</Card>
				</Collapse>
			</div>
		);
	}
}

export {
	CollapseComp
};
