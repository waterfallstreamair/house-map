/*
 * HomeReducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS({
  templates: false,
  properties: {
    houses: false,
    filtered: false,
  },
  template: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case constants.TYPE_TEMPLATES_SUCCESS:
      return state.set('templates', action.templates);
    case constants.TYPE_PROPERTIES_SUCCESS:
      return state.setIn(['properties', 'houses'], action.properties);
    case constants.TYPE_TEMPLATE_SET:
      return state.set('template', action.template);
    case constants.TYPE_FILTER_SET:
      return state.setIn(['properties', 'filtered'], action.properties);
    default:
      return state;
  }
}

export default homeReducer;
