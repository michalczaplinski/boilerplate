// Set up your root reducer here...
import { combineReducers } from 'redux';
import objectAssign from 'object-assign';

import * as types from '../actions/actionTypes';


function test(state={}, action) {
  switch (action.type) {

    case types.TEST:
      return objectAssign({}, state, {
        who: "Michal"
      });

    default:
      return state
  }
}


export default combineReducers({
  test
});
