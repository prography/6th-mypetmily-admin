import { call, put } from 'redux-saga/effects';

export const fetchEntity = ({ request, success, failure, api }: any) => {
  return function* (...p: any) {
    try {
      yield put(request());
      const data = yield call(api, ...p);
      yield put(success(data));
    } catch (err) {
      yield put(failure(err));
    }
  };
};
