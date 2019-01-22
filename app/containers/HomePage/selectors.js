/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectTemplates = () =>
  createSelector(selectHome, homeState => homeState.get('templates'));

const makeSelectProperties = () =>
  createSelector(selectHome, homeState =>
    homeState.getIn(['properties', 'houses']),
  );

const makeSelectTemplate = () =>
  createSelector(selectHome, homeState => homeState.get('template'));

const makeSelectFiltered = () =>
  createSelector(selectHome, homeState =>
    homeState.getIn(['properties', 'filtered']),
  );

export {
  selectHome,
  makeSelectTemplates,
  makeSelectProperties,
  makeSelectTemplate,
  makeSelectFiltered,
};
