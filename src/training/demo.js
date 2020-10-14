import {createStore} from 'redux';
import {status, sort} from './actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);

console.log('Default: ', store.getState())

// change status
// var action = {type : 'TOGGLE_STATUS'};
store.dispatch(status());
console.log('TOGGLE_STATUS: ', store.getState())

// sort name
store.dispatch(sort({
  orderBy: 'name',
  orderDir: 'desc'
}));
console.log('SORT: ', store.getState())