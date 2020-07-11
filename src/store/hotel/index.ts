import { combineReducers } from 'redux';

import { initialStatusSet, createReducer } from 'utils/redux';
import {
  createHotelEntity,
  deleteHotelEntity,
  getHotelsEntity,
  getHotelEntity,
} from './action';

export type hotelState = {
  hotels: {
    items: {};
    statusSet: StatusSet;
  };
  hotel: {
    items: {};
    statusSet: StatusSet;
  };
  createHotel: {
    statusSet: StatusSet;
  };
  deleteHotel: {
    statusSet: StatusSet;
  };
};

const initialState: hotelState = {
  hotels: {
    items: {},
    statusSet: initialStatusSet,
  },
  hotel: {
    items: {},
    statusSet: initialStatusSet,
  },
  createHotel: {
    statusSet: initialStatusSet,
  },
  deleteHotel: {
    statusSet: initialStatusSet,
  },
};

const getHotelsReducer = createReducer(
  getHotelsEntity.actions,
  initialState.hotels,
);
const getHotelReducer = createReducer(
  getHotelEntity.actions,
  initialState.hotel,
);
const createHotelReducer = createReducer(
  createHotelEntity.actions,
  initialState.createHotel,
);
const deleteHotelReducer = createReducer(
  deleteHotelEntity.actions,
  initialState.deleteHotel,
);

export default combineReducers({
  hotels: getHotelsReducer,
  hotel: getHotelReducer,
  createHotel: createHotelReducer,
  deleteHotel: deleteHotelReducer,
});
