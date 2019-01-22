import { fromJS } from 'immutable';

import homeReducer from '../reducer';
// import * as actions from '../actions';
// import * as constants from '../constants';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      templates: false,
      properties: {
        houses: false,
        filtered: false,
      },
      template: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });
});
