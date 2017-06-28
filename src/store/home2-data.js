import { observable, useStrict, action } from 'mobx';

useStrict(true);

class Home2Data {
  @observable count = 0;
  
  @action add_count = () => {
    this.count += 1;
  }
  @action minus_count = () => {
    this.count -= 1;
  }
}

export default Home2Data;
