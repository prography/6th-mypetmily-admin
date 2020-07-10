import { all, call, fork, take, takeLatest } from '@redux-saga/core/effects';
import { GET_HOTELS, getHotelEntity } from 'store/hotel/action';
import { fetchEntity } from 'utils/saga';

const getHotels = fetchEntity(getHotelEntity);

function* watchGetHotels() {
  yield takeLatest(GET_HOTELS, getHotels);
}

export default function* root() {
  yield all([fork(watchGetHotels)]);
}
