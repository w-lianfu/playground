import React, { Component } from 'react';
import Rx from 'rxjs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import { fullWhite } from 'material-ui/styles/colors';
import { observer } from 'mobx-react';

import '../script/rx';

import Home2Data from '../store/home2-data';

const home2Data = new Home2Data();

@observer class Home2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let btn1 = this.refs.btn1;
    Rx.Observable.fromEvent(btn1, 'click')
      .throttleTime(1000)
      .subscribe(() => home2Data.add_count());

    let minusObserver = Rx.Observable.create(() => {
      home2Data.minus_count();
    });

    let btn2 = this.refs.btn2;
    Rx.Observable.fromEvent(btn2, 'click')
      .subscribe(() =>
        minusObserver.subscribe()
      );
  }

  ck() {

  }

  render() {
    let styled = {
      button_style: {
        padding: '0.5rem 2rem',
        backgroundColor: '#333',
        color: '#fff',
        marginTop: '1rem'
      }
    }

    return (
      <div>
        <p>home2 page</p>
        <p><span>{home2Data.count}</span></p>
        <MuiThemeProvider>
          <RaisedButton
            label='Increment'
            secondary={true}
            onTouchTap={this.ck.bind(this)}
            icon={<ActionAndroid color={fullWhite} />}
            backgroundColor='#a4c639'
          />
        </MuiThemeProvider>
        <p>
          <button ref='btn1'
            style={styled.button_style}>
            Increment
          </button>
        </p>
        <p>
          <button ref='btn2'
            style={styled.button_style}>
            Decrement
          </button>
        </p>
      </div>
    );
  }
}

export default Home2;
