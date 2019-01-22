import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';

export function* getTemplates() {
  const url = constants.CONST_URL_TEMPLATES;
  try {
    const templates = yield call(request, url);
    yield put(actions.getTemplates({ templates }));
  } catch (e) {
    console.log({ e })
    // yield put(actions.show({ e }));
  }
}

export function* getProperties() {
  const url = constants.CONST_URL_PROPERTIES;
  try {
    const properties = yield call(request, url);
    yield put(actions.getProperties({ properties }));
  } catch (e) {
    console.log({ e })
    // yield put(actions.show({ e }));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield all([
    takeLatest(constants.TYPE_TEMPLATES_REQUEST, getTemplates),
    takeLatest(constants.TYPE_PROPERTIES_REQUEST, getProperties),
  ]);
}
