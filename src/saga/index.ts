import { all, fork } from 'redux-saga/effects';

import hotelSaga from './hotel';

export default function* rootSaga() {
  yield all([fork(hotelSaga)]);
}
