import { combineReducers } from 'redux';

import { initialStatusSet, createReducer } from 'utils/redux';
import { getHotelEntity } from './action';

export type hotelState = {
  hotels: {
    items: {};
    statusSet: StatusSet;
  };
};

const initialState: hotelState = {
  hotels: {
    items: {},
    statusSet: initialStatusSet,
  },
};

const getHotelReducer = createReducer(getHotelEntity, initialState.hotels);

export default combineReducers({
  getHotelReducer,
});
