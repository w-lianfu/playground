import {
  observable,
  useStrict,
  action
} from 'mobx';

class HomeData {
  @observable num = 99;
  @observable text = null;

  @action get_text = (data) => {
    this.text = data.text;
  }
}

export default HomeData;
