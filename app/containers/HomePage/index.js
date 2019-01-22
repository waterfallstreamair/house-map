/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { 
  makeSelectTemplates,
  makeSelectProperties,
  makeSelectTemplate,
  makeSelectFiltered,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './Page';
import * as actions from './actions';

const mapStateToProps = createStructuredSelector({
  templates: makeSelectTemplates(),
  properties: makeSelectProperties(),
  template: makeSelectTemplate(),
  filtered: makeSelectFiltered(),
});

const mapDispatchToProps = dispatch => ({
  getTemplatesRequest: () => dispatch(actions.getTemplatesRequest()),
  getPropertiesRequest: () => dispatch(actions.getPropertiesRequest()),
  setTemplate: options => dispatch(actions.setTemplate(options)),
  setFilter: options => dispatch(actions.setFilter(options)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
