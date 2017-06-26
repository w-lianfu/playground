import { Map, List, Seq, fromJS } from 'immutable';
import assert from 'assert';

const obj = {1: 'one'};
Object.keys(obj);
obj['1'];
obj[1];

const map = fromJS(obj);
map.get('1');
