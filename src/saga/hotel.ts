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
  DELETE_HOTEL,
  deleteHotelEntity,
  GET_HOTEL,
  GET_HOTELS,
  getHotelEntity,
  getHotelsEntity,
} from 'store/hotel/action';
import { fetchEntity } from 'utils/saga';

const getHotels = fetchEntity(getHotelsEntity);
const getHotel = fetchEntity(getHotelEntity);
const createHotel = fetchEntity(createHotelEntity);
const deleteHotel = fetchEntity(deleteHotelEntity);

function* watchGetHotels() {
  yield takeLatest(GET_HOTELS, getHotels);
}

function* watchGetHotel() {
  while (true) {
    const { payload } = yield take(GET_HOTEL);
    yield call(getHotel, payload);
  }
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
    yield put({ type: GET_HOTELS });
    history.push('/hotels');
  }
}

function* watchDeleteHotel() {
  while (true) {
    const { payload } = yield take(DELETE_HOTEL);
    yield call(deleteHotel, payload);
  }
}

function* watchDeleteHotelSuccess() {
  while (true) {
    yield take(deleteHotelEntity.actions.success);
    yield put({ type: GET_HOTELS });
    alert('삭제 성공');
  }
}

export default function* root() {
  yield all([
    fork(watchGetHotels),
    fork(watchCreateHotel),
    fork(watchCreateHotelSuccess),
    fork(watchDeleteHotel),
    fork(watchDeleteHotelSuccess),
    fork(watchGetHotel),
  ]);
}
