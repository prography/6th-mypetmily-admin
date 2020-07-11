import { combineReducers } from 'redux';

import { initialStatusSet, createReducer } from 'utils/redux';
import { createHotelEntity, deleteHotelEntity, getHotelEntity } from './action';

export type hotelState = {
  hotels: {
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
  createHotel: {
    statusSet: initialStatusSet,
  },
  deleteHotel: {
    statusSet: initialStatusSet,
  },
};

const getHotelReducer = createReducer(
  getHotelEntity.actions,
  initialState.hotels,
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
  hotels: getHotelReducer,
  createHotel: createHotelReducer,
  deleteHotel: deleteHotelReducer,
});
