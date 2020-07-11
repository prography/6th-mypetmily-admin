import {
  all,
  call,
  fork,
  take,
  put,
  takeLatest,
  getContext,
} from 'redux-saga/effects';
import {
  CREATE_HOTEL,
  createHotelEntity,
  GET_HOTELS,
  getHotelEntity,
} from 'store/hotel/action';
import { fetchEntity } from 'utils/saga';

const getHotels = fetchEntity(getHotelEntity);
const createHotel = fetchEntity(createHotelEntity);

function* watchGetHotels() {
  yield takeLatest(GET_HOTELS, getHotels);
}

function* watchCreateHotel() {
  while (true) {
    const { payload } = yield take(CREATE_HOTEL);
    yield call(createHotel, payload);
  }
}

function* watchCreateHotelSuccess() {
  while (true) {
    yield take(createHotelEntity.actions.success);
    const history = yield getContext('history');
    console.log(history);
    yield put({ type: GET_HOTELS });
    history.push('/hotels');
  }
}

export default function* root() {
  yield all([
    fork(watchGetHotels),
    fork(watchCreateHotel),
    fork(watchCreateHotelSuccess),
  ]);
}
