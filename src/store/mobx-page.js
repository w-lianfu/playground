import { observable, useStrict, action } from 'mobx';

useStrict(true);

class MobxData {
	@observable count = 0;
	@observable course_list = null;
	
	@action get_list = (data) => {
		this.course_list = data.course_list
	}
	
	@action count_add = () => {
		this.count++;
	}
	
	@action count_minus = () => {
		if(this.count <= 0) return 0;
		this.count--;
	}
	
	@action reset = () => {
		this.count = 0;
	}
}

const mobxData = new MobxData();

export {
	MobxData,
	mobxData
}
