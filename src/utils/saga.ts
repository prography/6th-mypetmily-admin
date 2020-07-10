import { call, put } from 'redux-saga/effects';

interface IEntityAction {
  request: (...p: any[]) => any;
  success: (...p: any[]) => any;
  failure: (...p: any[]) => any;
  [key: string]: (...p: any[]) => any;
  api: ApiEndpoint<any, any>;
}

export const fetchEntity = <T extends IEntityAction>({
  request,
  success,
  failure,
  api,
}: T) => {
  return function* (...p: Parameters<T['api']>) {
    try {
      yield put(request());
      const data = yield call(api, ...p);
      yield put(success(data));
    } catch (err) {
      yield put(failure(err));
    }
  };
};
